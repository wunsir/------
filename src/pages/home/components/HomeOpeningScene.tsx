import { useCallback, useEffect, useRef, useState } from 'react'

import { HomeCurtainLayer } from './HomeCurtainLayer'
import { HomeGuideDeck } from './HomeGuideDeck'
import { HomeNavOverlay } from './HomeNavOverlay'
import { HomeOpeningFallback } from './HomeOpeningFallback'
import { HomePuppetFigure } from './HomePuppetFigure'
import { HomeStageSet } from './HomeStageSet'
import { HomeWarmLight } from './HomeWarmLight'
import {
  HOME_OPENING_KEYS,
  type HomeOpeningMode,
  type HomeScenePhase,
  getOpeningDecision,
  getPuppetPose,
  getSequenceForMode,
  phaseRank,
} from './homeOpeningSceneState'

function useReducedMotionPreference() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return false
    }

    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return undefined
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches)
    }

    mediaQuery.addEventListener('change', listener)

    return () => {
      mediaQuery.removeEventListener('change', listener)
    }
  }, [])

  return prefersReducedMotion
}

export function HomeOpeningScene() {
  const prefersReducedMotion = useReducedMotionPreference()
  const [initialDecision] = useState(() =>
    getOpeningDecision(prefersReducedMotion),
  )

  const [openingMode] = useState<HomeOpeningMode>(initialDecision.openingMode)
  const [scenePhase, setScenePhase] = useState<HomeScenePhase>(initialDecision.scenePhase)
  const [canSkip, setCanSkip] = useState(initialDecision.openingMode !== 'full')
  const readyRecordedRef = useRef(false)
  const timeoutIdsRef = useRef<number[]>([])

  const clearScheduledTransitions = useCallback(() => {
    timeoutIdsRef.current.forEach((timeoutId) => {
      window.clearTimeout(timeoutId)
    })
    timeoutIdsRef.current = []
  }, [])

  useEffect(() => {
    const sequence = getSequenceForMode(openingMode)

    clearScheduledTransitions()

    if (openingMode === 'full') {
      timeoutIdsRef.current.push(window.setTimeout(() => setCanSkip(true), 1_200))
    }

    if (initialDecision.scenePhase !== 'ready') {
      sequence
        .filter(({ after }) => after > 0)
        .forEach(({ phase, after }) => {
          timeoutIdsRef.current.push(
            window.setTimeout(() => setScenePhase(phase), after),
          )
        })
    }

    return () => {
      clearScheduledTransitions()
    }
  }, [clearScheduledTransitions, initialDecision.scenePhase, openingMode])

  useEffect(() => {
    if (scenePhase !== 'ready' || readyRecordedRef.current) {
      return
    }

    readyRecordedRef.current = true
    window.sessionStorage.setItem(HOME_OPENING_KEYS.lastReadyAt, String(Date.now()))
    window.sessionStorage.setItem(HOME_OPENING_KEYS.hasSeen, 'true')
  }, [scenePhase])

  useEffect(() => {
    return () => {
      window.sessionStorage.setItem(HOME_OPENING_KEYS.lastExitAt, String(Date.now()))
    }
  }, [])

  useEffect(() => {
    if (scenePhase === 'ready') {
      return undefined
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && canSkip) {
        setScenePhase('ready')
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [canSkip, scenePhase])

  const navVisible = phaseRank[scenePhase] >= phaseRank.handoff
  const guideVisible = navVisible
  const puppetPose = getPuppetPose(scenePhase)

  const handleSkipIntent = () => {
    if (!canSkip || scenePhase === 'ready') {
      return
    }

    clearScheduledTransitions()
    setScenePhase('ready')
  }

  return (
    <section
      className="home-opening-scene"
      data-guide-visible={guideVisible}
      data-nav-visible={navVisible}
      data-opening-mode={openingMode}
      data-scene-phase={scenePhase}
      data-testid="home-opening-scene"
      onPointerDown={handleSkipIntent}
      onWheelCapture={handleSkipIntent}
    >
      <h1 className="sr-only">一戏入影</h1>

      <div className="home-opening-stage">
        <HomeStageSet scenePhase={scenePhase} />
        <HomeWarmLight openingMode={openingMode} scenePhase={scenePhase} />
        <HomePuppetFigure puppetPose={puppetPose} />
        <HomeCurtainLayer scenePhase={scenePhase} />
        <HomeNavOverlay visible={navVisible} />
        <HomeOpeningFallback openingMode={openingMode} />
      </div>

      <HomeGuideDeck visible={guideVisible} />
    </section>
  )
}
