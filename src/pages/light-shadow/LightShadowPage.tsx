import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { themeRouteBySlug } from '../../router/theme-pages'
import type {
  CharacterCard,
  CharacterRoleFilter,
  LightPosition,
  LightShadowInputMode,
  LightShadowScenePhase,
} from '../../types/shadow-puppetry'
import { LightShadowSceneShell } from './components/LightShadowSceneShell'
import type { LampInputPayload } from './components/LampInputSurface'
import {
  backstageMechanics,
  characterCards,
  characterRoleFilters,
  fallbackLampPath,
  performanceTimeline,
  playCards,
} from './lightShadowContent'

const DEFAULT_LAMP_POSITION: LightPosition = {
  u: 0.5,
  v: 0.36,
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value))
}

function firstCharacterForRole(role: CharacterRoleFilter): CharacterCard {
  const pool = role === 'all' ? characterCards : characterCards.filter((card) => card.roleType === role)

  return pool[0] ?? characterCards[0]
}

export function LightShadowPage() {
  const isTestEnv = import.meta.env.MODE === 'test'
  const [selectedRole, setSelectedRole] = useState<CharacterRoleFilter>('旦角')
  const [activeCharacter, setActiveCharacter] = useState<CharacterCard>(() => firstCharacterForRole('旦角'))
  const [inputMode, setInputMode] = useState<LightShadowInputMode>('none')
  const [scenePhase, setScenePhase] = useState<LightShadowScenePhase>('auto-demo')
  const [lampRender, setLampRender] = useState<LightPosition>(DEFAULT_LAMP_POSITION)

  const autoDemoTimerRef = useRef<number | null>(null)
  const switchTimerRef = useRef<number | null>(null)
  const settleTimerRef = useRef<number | null>(null)
  const demoPathIndexRef = useRef(0)

  const pageEntry = themeRouteBySlug['light-shadow']

  const sortedPlays = useMemo(() => {
    const related = playCards.filter((play) => play.relatedCharacters.includes(activeCharacter.name))
    const rest = playCards.filter((play) => !related.includes(play))

    return [...related, ...rest]
  }, [activeCharacter.name])

  useEffect(() => {
    if (isTestEnv || scenePhase !== 'auto-demo') {
      if (autoDemoTimerRef.current !== null) {
        window.clearInterval(autoDemoTimerRef.current)
        autoDemoTimerRef.current = null
      }

      return
    }

    autoDemoTimerRef.current = window.setInterval(() => {
      demoPathIndexRef.current = (demoPathIndexRef.current + 1) % fallbackLampPath.length
      const nextLamp = fallbackLampPath[demoPathIndexRef.current]

      setLampRender(nextLamp)
    }, 1350)

    return () => {
      if (autoDemoTimerRef.current !== null) {
        window.clearInterval(autoDemoTimerRef.current)
        autoDemoTimerRef.current = null
      }
    }
  }, [isTestEnv, scenePhase])

  useEffect(() => {
    return () => {
      if (switchTimerRef.current !== null) {
        window.clearTimeout(switchTimerRef.current)
      }

      if (settleTimerRef.current !== null) {
        window.clearTimeout(settleTimerRef.current)
      }

      if (autoDemoTimerRef.current !== null) {
        window.clearInterval(autoDemoTimerRef.current)
      }
    }
  }, [])

  const clearSettleTimer = useCallback(() => {
    if (settleTimerRef.current !== null) {
      window.clearTimeout(settleTimerRef.current)
      settleTimerRef.current = null
    }
  }, [])

  const handleLampInput = useCallback(
    (
      payload: LampInputPayload,
      mode: Exclude<LightShadowInputMode, 'none'>,
    ) => {
      clearSettleTimer()

      const width = payload.bounds.width || 1
      const height = payload.bounds.height || 1
      const nextLampPosition = {
        u: clamp((payload.clientX - payload.bounds.left) / width, 0, 1),
        v: clamp((payload.clientY - payload.bounds.top) / height, 0, 1),
      }

      setInputMode(mode)
      setLampRender(nextLampPosition)
      setScenePhase('interactive')
    },
    [clearSettleTimer],
  )

  const handleLampInputEnd = useCallback(() => {
    clearSettleTimer()
    setScenePhase('settle')

    settleTimerRef.current = window.setTimeout(() => {
      setInputMode('none')
      setScenePhase('auto-demo')
    }, 1000)
  }, [clearSettleTimer])

  const handleRoleSelect = useCallback(
    (role: CharacterRoleFilter) => {
      setSelectedRole(role)
      setActiveCharacter(firstCharacterForRole(role))
      setScenePhase('switching')

      if (switchTimerRef.current !== null) {
        window.clearTimeout(switchTimerRef.current)
      }

      switchTimerRef.current = window.setTimeout(() => {
        setScenePhase(inputMode === 'none' ? 'auto-demo' : 'interactive')
      }, 360)
    },
    [inputMode],
  )

  return (
    <LightShadowSceneShell
      activeCharacter={activeCharacter}
      backdropSteps={backstageMechanics}
      inputMode={inputMode}
      lampRender={lampRender}
      onLampInput={handleLampInput}
      onLampInputEnd={handleLampInputEnd}
      onSelectRole={handleRoleSelect}
      pageEntry={pageEntry}
      plays={sortedPlays}
      roleOptions={characterRoleFilters}
      scenePhase={scenePhase}
      selectedRole={selectedRole}
      timeline={performanceTimeline}
    />
  )
}
