import type { HomeScenePhase } from './homeOpeningSceneState'
import { phaseRank } from './homeOpeningSceneState'

type HomeStageSetProps = {
  scenePhase: HomeScenePhase
}

export function HomeStageSet({ scenePhase }: HomeStageSetProps) {
  const currentRank = phaseRank[scenePhase]
  const stageVisible = currentRank >= phaseRank.stage
  const handoffVisible = currentRank >= phaseRank.handoff

  return (
    <div
      aria-hidden="true"
      className="home-stage-shell"
      style={{
        opacity: stageVisible ? 1 : 0.22,
        transform: stageVisible ? 'translateY(0)' : 'translateY(18px)',
      }}
    >
      <div className="home-stage-eave" />
      <div className="home-stage-columns">
        <span className="home-stage-column" />
        <span className="home-stage-column" />
      </div>
      <div className="home-stage-screen" />
      <div className="home-stage-floor" />
      <div
        className="home-stage-caption"
        style={{
          opacity: handoffVisible ? 1 : 0,
          transform: handoffVisible ? 'translateY(0)' : 'translateY(12px)',
        }}
      >
        幕已开，影将入场。
      </div>
    </div>
  )
}
