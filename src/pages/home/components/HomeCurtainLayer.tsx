import type { HomeScenePhase } from './homeOpeningSceneState'
import { phaseRank } from './homeOpeningSceneState'

type HomeCurtainLayerProps = {
  scenePhase: HomeScenePhase
}

export function HomeCurtainLayer({ scenePhase }: HomeCurtainLayerProps) {
  const currentRank = phaseRank[scenePhase]
  const isClosed = currentRank === phaseRank.closed
  const isOpening = currentRank >= phaseRank.curtain

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-30 overflow-hidden">
      <div
        className="home-curtain-panel home-curtain-panel-left"
        style={{
          opacity: isClosed ? 1 : 0.98,
          transform: isOpening ? 'translateX(-34%)' : 'translateX(0%)',
        }}
      />
      <div
        className="home-curtain-panel home-curtain-panel-right"
        style={{
          opacity: isClosed ? 1 : 0.98,
          transform: isOpening ? 'translateX(34%)' : 'translateX(0%)',
        }}
      />
      <div
        className="home-curtain-seam"
        style={{
          opacity: currentRank >= phaseRank.handoff ? 0 : 0.9,
          transform: isOpening ? 'scaleY(0.82)' : 'scaleY(1)',
        }}
      />
    </div>
  )
}
