import type { CharacterCard, TimelineStep } from '../../../types/shadow-puppetry'

type PerformanceTimelineSectionProps = {
  activeCharacter: CharacterCard
  timeline: TimelineStep[]
}

export function PerformanceTimelineSection({
  activeCharacter,
  timeline,
}: PerformanceTimelineSectionProps) {
  return (
    <section className="stage-panel p-6 sm:p-8 lg:p-10">
      <header className="mb-6 space-y-3">
        <p className="text-xs uppercase tracking-[0.36em] text-[var(--stage-muted)]">一场戏的时间线</p>
        <h2 className="font-display text-3xl text-[var(--stage-paper)] sm:text-4xl">从点灯到落幕</h2>
        <p className="text-sm leading-7 text-[var(--stage-ink-soft)] sm:text-base">
          把当前上场角色 <span className="text-[var(--stage-paper)]">{activeCharacter.name}</span> 放进这条时间线里，可以看清一场皮影戏怎样一步步演起来。
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-4">
        {timeline.map((step, index) => (
          <article
            key={step.id}
            className="relative rounded-3xl border border-white/10 bg-[rgba(10,8,8,0.62)] p-5"
          >
            {index < timeline.length - 1 ? (
              <span className="pointer-events-none absolute -right-2 top-1/2 hidden h-px w-4 bg-[rgba(240,197,112,0.34)] lg:block" />
            ) : null}
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">{step.phase}</p>
            <h3 className="mt-2 font-display text-2xl text-[var(--stage-paper)]">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--stage-ink-soft)]">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
