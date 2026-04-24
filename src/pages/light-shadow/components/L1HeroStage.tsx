import type { CSSProperties, ReactNode } from 'react'

import type {
  CharacterCard,
  LightPosition,
  LightShadowInputMode,
  LightShadowScenePhase,
} from '../../../types/shadow-puppetry'
import { LampInputSurface, type LampInputPayload } from './LampInputSurface'
import { PuppetStageActor } from './PuppetStageActor'
import { SceneFallbackPlayer } from './SceneFallbackPlayer'

type L1HeroStageProps = {
  operationHint: string
  title: string
  activeCharacter: CharacterCard
  inputMode: LightShadowInputMode
  lampRender: LightPosition
  onLampInput: (
    payload: LampInputPayload,
    mode: Exclude<LightShadowInputMode, 'none'>,
  ) => void
  onLampInputEnd: () => void
  scenePhase: LightShadowScenePhase
  switcher: ReactNode
}

type LightingMetrics = {
  brightness: number
  depthShift: number
  lampBeamAngle: number
  outlineStrength: number
  shadowOffsetX: number
  shadowOffsetY: number
  shadowScale: number
  spotX: number
  spotY: number
}

function deriveLightingMetrics(position: LightPosition): LightingMetrics {
  const deltaX = position.u - 0.5
  const deltaY = position.v - 0.5
  const radialDistance = Math.min(1, Math.abs(deltaX) * 1.2 + Math.abs(deltaY) * 0.85)

  return {
    spotX: 8 + position.u * 84,
    spotY: 14 + position.v * 58,
    shadowOffsetX: -deltaX * 128,
    shadowOffsetY: 26 + Math.abs(deltaY) * 38,
    shadowScale: 0.92 + Math.abs(deltaX) * 0.42,
    outlineStrength: 0.38 + (1 - radialDistance) * 0.52,
    brightness: 0.32 + (1 - Math.min(1, Math.abs(deltaY) * 1.35)) * 0.56,
    depthShift: deltaY * 36,
    lampBeamAngle: -6 + deltaX * 18,
  }
}

export function L1HeroStage({
  operationHint,
  title,
  activeCharacter,
  inputMode,
  lampRender,
  onLampInput,
  onLampInputEnd,
  scenePhase,
  switcher,
}: L1HeroStageProps) {
  const lighting = deriveLightingMetrics(lampRender)

  const cssVars = {
    '--lamp-u': lampRender.u.toFixed(4),
    '--lamp-v': lampRender.v.toFixed(4),
    '--spot-x': `${lighting.spotX}%`,
    '--spot-y': `${lighting.spotY}%`,
    '--lamp-brightness': lighting.brightness.toFixed(4),
    '--outline-strength': lighting.outlineStrength.toFixed(4),
    '--shadow-x': `${lighting.shadowOffsetX}px`,
    '--shadow-y': `${lighting.shadowOffsetY}px`,
    '--shadow-scale': lighting.shadowScale.toFixed(4),
    '--depth-shift': `${lighting.depthShift.toFixed(2)}px`,
    '--beam-angle': `${lighting.lampBeamAngle.toFixed(2)}deg`,
  } as CSSProperties

  return (
    <section
      className="l1-hero-stage stage-panel relative overflow-hidden p-6 sm:p-8 lg:p-10"
      data-input-mode={inputMode}
      data-scene-phase={scenePhase}
      data-testid="l1-hero-stage"
      style={cssVars}
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.22),rgba(0,0,0,0.52))]" data-testid="dark-stage" />

      <header className="relative z-10 mb-4 max-w-2xl space-y-2 sm:mb-5">
        <h1 className="font-display text-4xl text-[var(--stage-paper)] sm:text-6xl">{title}</h1>
        <p className="text-xs uppercase tracking-[0.24em] text-[var(--stage-muted)] sm:text-sm">
          {operationHint}
        </p>
      </header>

      <div className="relative z-10 space-y-3 sm:space-y-4">
        <div className="l1-paper-stage relative min-h-[22rem] overflow-hidden rounded-[1.8rem] border border-white/12 bg-[linear-gradient(180deg,rgba(230,206,165,0.12),rgba(20,15,12,0.55))] sm:min-h-[25rem]" data-testid="paper-screen">
          <div
            className="pointer-events-none absolute -left-8 top-[-4rem] h-[17rem] w-[22rem] rounded-[50%] bg-[radial-gradient(circle,rgba(255,204,120,0.72),rgba(255,178,87,0.08)_60%,rgba(255,178,87,0)_72%)] blur-md"
            data-testid="lamp-beam"
            style={{
              left: 'calc(var(--spot-x) - 11rem)',
              top: 'calc(var(--spot-y) - 12rem)',
              transform: 'rotate(var(--beam-angle))',
              transition: 'left 180ms ease-out, top 180ms ease-out, transform 180ms ease-out',
            }}
          />
          <div className="pointer-events-none absolute inset-0 opacity-[var(--lamp-brightness)] [background:radial-gradient(circle_at_var(--spot-x)_var(--spot-y),rgba(255,225,168,0.45)_0%,rgba(255,199,116,0.16)_28%,rgba(15,11,10,0)_62%)]" />
          <div className="pointer-events-none absolute inset-0 [background:linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.32))]" />

          <PuppetStageActor
            brightness={lighting.brightness}
            character={activeCharacter}
            depthShift={lighting.depthShift}
            outlineStrength={lighting.outlineStrength}
            shadowOffsetX={lighting.shadowOffsetX}
            shadowOffsetY={lighting.shadowOffsetY}
            shadowScale={lighting.shadowScale}
          />

          <LampInputSurface onInput={onLampInput} onInputEnd={onLampInputEnd} />
          <SceneFallbackPlayer active={scenePhase === 'auto-demo'} />

          <p className="pointer-events-none absolute bottom-4 right-4 hidden rounded-full border border-white/12 bg-[rgba(9,8,8,0.34)] px-3 py-1 text-[11px] uppercase tracking-[0.26em] text-[var(--stage-muted)] sm:block">
            {inputMode === 'touch' ? '拖动控灯' : inputMode === 'mouse' ? '移动控灯' : '自动演示'}
          </p>
        </div>

        <div className="mx-auto w-full max-w-4xl">{switcher}</div>
      </div>
    </section>
  )
}
