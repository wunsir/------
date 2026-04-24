import type {
  CharacterCard,
  CharacterRoleFilter,
  LightPosition,
  LightShadowInputMode,
  LightShadowScenePhase,
  PlayCard,
  ThemeRouteEntry,
  TimelineStep,
} from '../../../types/shadow-puppetry'
import { BackstageMechanicsSection } from './BackstageMechanicsSection'
import { CharacterOnStageSwitcher } from './CharacterOnStageSwitcher'
import { L1HeroStage } from './L1HeroStage'
import { type LampInputPayload } from './LampInputSurface'
import { PerformanceTimelineSection } from './PerformanceTimelineSection'
import { StageMomentSection } from './StageMomentSection'

type BackstageStep = {
  id: string
  title: string
  description: string
}

type LightShadowSceneShellProps = {
  activeCharacter: CharacterCard
  backdropSteps: ReadonlyArray<BackstageStep>
  inputMode: LightShadowInputMode
  lampRender: LightPosition
  onLampInput: (
    payload: LampInputPayload,
    mode: Exclude<LightShadowInputMode, 'none'>,
  ) => void
  onLampInputEnd: () => void
  onSelectRole: (role: CharacterRoleFilter) => void
  pageEntry: ThemeRouteEntry
  plays: PlayCard[]
  roleOptions: Array<{
    label: string
    value: CharacterRoleFilter
  }>
  scenePhase: LightShadowScenePhase
  selectedRole: CharacterRoleFilter
  timeline: TimelineStep[]
}

export function LightShadowSceneShell({
  activeCharacter,
  backdropSteps,
  inputMode,
  lampRender,
  onLampInput,
  onLampInputEnd,
  onSelectRole,
  pageEntry,
  plays,
  roleOptions,
  scenePhase,
  selectedRole,
  timeline,
}: LightShadowSceneShellProps) {
  return (
    <div className="space-y-8 lg:space-y-10">
      <div data-testid="scene-order-hero">
        <L1HeroStage
          activeCharacter={activeCharacter}
          inputMode={inputMode}
          lampRender={lampRender}
          onLampInput={onLampInput}
          onLampInputEnd={onLampInputEnd}
          operationHint="按住幕面移灯"
          scenePhase={scenePhase}
          switcher={
            <CharacterOnStageSwitcher
              activeCharacter={activeCharacter}
              onSelectRole={onSelectRole}
              roleOptions={roleOptions}
              selectedRole={selectedRole}
            />
          }
          title={pageEntry.meta.title}
        />
      </div>

      <div data-testid="scene-order-backstage">
        <BackstageMechanicsSection steps={backdropSteps} />
      </div>

      <div data-testid="scene-order-moments">
        <StageMomentSection activeCharacter={activeCharacter} plays={plays} />
      </div>

      <div data-testid="scene-order-timeline">
        <PerformanceTimelineSection activeCharacter={activeCharacter} timeline={timeline} />
      </div>
    </div>
  )
}
