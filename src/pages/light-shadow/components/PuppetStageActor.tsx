import type { CharacterCard } from '../../../types/shadow-puppetry'

type PuppetStageActorProps = {
  character: CharacterCard
  brightness: number
  depthShift: number
  outlineStrength: number
  shadowOffsetX: number
  shadowOffsetY: number
  shadowScale: number
}

export function PuppetStageActor({
  character,
  brightness,
  depthShift,
  outlineStrength,
  shadowOffsetX,
  shadowOffsetY,
  shadowScale,
}: PuppetStageActorProps) {
  return (
    <div className="relative flex h-full items-end justify-center pb-8">
      <div
        aria-hidden
        className="absolute bottom-7 h-24 w-56 rounded-full bg-[rgba(0,0,0,0.62)] blur-xl"
        style={{
          transform: `translate(${shadowOffsetX}px, ${shadowOffsetY}px) scale(${shadowScale})`,
        }}
      />

      <div
        className="relative"
        data-testid="stage-actor"
        style={{
          transform: `translate3d(${depthShift * 0.32}px, ${depthShift}px, 0)`,
        }}
      >
        <div
          aria-hidden
          className="absolute inset-0 rounded-[46%_46%_34%_34%] border border-[rgba(245,234,208,0.9)] blur-[1px]"
          style={{
            opacity: outlineStrength,
          }}
        />
        <div
          className="shadow-puppet relative h-52 w-36 rounded-[46%_46%_34%_34%] bg-[linear-gradient(180deg,rgba(12,10,10,0.98),rgba(4,4,4,0.92))]"
          style={{
            filter: `brightness(${0.78 + brightness * 0.45})`,
          }}
        />
      </div>

      <div className="absolute right-4 top-4 rounded-2xl border border-white/10 bg-[rgba(9,8,8,0.52)] px-3 py-2 text-right">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--stage-muted)]">当前上场</p>
        <p className="font-display text-2xl text-[var(--stage-paper)]" data-testid="stage-actor-name">
          {character.name}
        </p>
        <p className="text-xs text-[var(--stage-ink-soft)]">{character.roleType}</p>
      </div>
    </div>
  )
}
