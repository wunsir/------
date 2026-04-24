export type HomeOpeningMode = 'full' | 'short' | 'lite' | 'static'
export type HomeScenePhase =
  | 'closed'
  | 'curtain'
  | 'stage'
  | 'light'
  | 'puppet'
  | 'handoff'
  | 'ready'
export type HomePuppetPose = 'hidden' | 'entering' | 'settled' | 'idle'

export const HOME_OPENING_KEYS = {
  hasSeen: 'hasSeenHomeOpening',
  lastReadyAt: 'lastHomeReadyAt',
  lastExitAt: 'lastHomeExitAt',
} as const

export const phaseRank: Record<HomeScenePhase, number> = {
  closed: 0,
  curtain: 1,
  stage: 2,
  light: 3,
  puppet: 4,
  handoff: 5,
  ready: 6,
}

type OpeningDecision = {
  openingMode: HomeOpeningMode
  scenePhase: HomeScenePhase
}

const FULL_SEQUENCE: Array<{ phase: HomeScenePhase; after: number }> = [
  { phase: 'curtain', after: 600 },
  { phase: 'stage', after: 1_800 },
  { phase: 'light', after: 2_600 },
  { phase: 'puppet', after: 3_200 },
  { phase: 'handoff', after: 4_300 },
  { phase: 'ready', after: 5_200 },
]

const SHORT_SEQUENCE: Array<{ phase: HomeScenePhase; after: number }> = [
  { phase: 'light', after: 700 },
  { phase: 'handoff', after: 1_320 },
  { phase: 'ready', after: 1_680 },
]

const LITE_SEQUENCE: Array<{ phase: HomeScenePhase; after: number }> = [
  { phase: 'light', after: 320 },
  { phase: 'handoff', after: 760 },
  { phase: 'ready', after: 1_200 },
]

export function getSequenceForMode(mode: HomeOpeningMode) {
  if (mode === 'full') {
    return FULL_SEQUENCE
  }

  if (mode === 'short') {
    return SHORT_SEQUENCE
  }

  if (mode === 'lite') {
    return LITE_SEQUENCE
  }

  return []
}

export function getPuppetPose(phase: HomeScenePhase): HomePuppetPose {
  if (phaseRank[phase] < phaseRank.puppet) {
    return 'hidden'
  }

  if (phase === 'puppet') {
    return 'entering'
  }

  if (phase === 'handoff') {
    return 'settled'
  }

  return 'idle'
}

function readStoredNumber(key: string) {
  const value = window.sessionStorage.getItem(key)
  const parsed = value ? Number(value) : Number.NaN

  return Number.isFinite(parsed) ? parsed : null
}

function prefersLiteMode() {
  const nav = navigator as Navigator & { deviceMemory?: number }

  if (typeof nav.deviceMemory === 'number' && nav.deviceMemory <= 2) {
    return true
  }

  if (typeof nav.hardwareConcurrency === 'number' && nav.hardwareConcurrency <= 2) {
    return true
  }

  return false
}

export function getOpeningDecision(reducedMotion: boolean): OpeningDecision {
  if (reducedMotion) {
    return {
      openingMode: 'static',
      scenePhase: 'ready',
    }
  }

  const hasSeen = window.sessionStorage.getItem(HOME_OPENING_KEYS.hasSeen) === 'true'
  const lastExitAt = readStoredNumber(HOME_OPENING_KEYS.lastExitAt)
  const now = Date.now()

  if (hasSeen && lastExitAt !== null && now - lastExitAt < 15_000) {
    return {
      openingMode: 'short',
      scenePhase: 'ready',
    }
  }

  if (hasSeen) {
    return {
      openingMode: 'short',
      scenePhase: 'curtain',
    }
  }

  if (prefersLiteMode()) {
    return {
      openingMode: 'lite',
      scenePhase: 'curtain',
    }
  }

  return {
    openingMode: 'full',
    scenePhase: 'closed',
  }
}
