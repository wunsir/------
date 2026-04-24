import type { HomeOpeningMode, HomeScenePhase } from './homeOpeningSceneState'
import { phaseRank } from './homeOpeningSceneState'

type HomeWarmLightProps = {
  openingMode: HomeOpeningMode
  scenePhase: HomeScenePhase
}

export function HomeWarmLight({
  openingMode,
  scenePhase,
}: HomeWarmLightProps) {
  const currentRank = phaseRank[scenePhase]
  const visible = currentRank >= phaseRank.light
  const ready = currentRank >= phaseRank.ready

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10">
      <div
        className="home-light-core"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'scale(1)' : 'scale(0.72)',
        }}
      />
      <div
        className="home-light-aura"
        data-opening-mode={openingMode}
        style={{
          opacity: visible ? 1 : 0,
          transform: ready ? 'scale(1.02)' : 'scale(0.94)',
        }}
      />
      <div
        className="home-light-beam"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? 'scaleY(1)' : 'scaleY(0.6)',
        }}
      />
    </div>
  )
}
