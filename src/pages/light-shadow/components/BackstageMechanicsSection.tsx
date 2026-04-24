type BackstageStep = {
  id: string
  title: string
  description: string
}

type BackstageMechanicsSectionProps = {
  steps: ReadonlyArray<BackstageStep>
}

export function BackstageMechanicsSection({
  steps,
}: BackstageMechanicsSectionProps) {
  return (
    <section className="stage-panel relative overflow-hidden p-6 sm:p-8 lg:p-10">
      <div className="pointer-events-none absolute left-[-10%] top-0 h-40 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,178,87,0.22),rgba(255,178,87,0))] blur-2xl" />

      <header className="mb-6 max-w-3xl space-y-3">
        <p className="text-xs uppercase tracking-[0.36em] text-[var(--stage-muted)]">幕布后面</p>
        <h2 className="font-display text-3xl text-[var(--stage-paper)] sm:text-4xl">灯一动，手也要跟着调</h2>
        <p className="text-sm leading-7 text-[var(--stage-ink-soft)] sm:text-base">
          台前看到的是影，台后要同时控制提杆、翻腕和灯光节奏。
        </p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {steps.map((step, index) => (
          <article
            key={step.id}
            className="rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(13,10,10,0.72))] p-5"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--stage-gold)]">0{index + 1}</p>
            <h3 className="mt-2 font-display text-2xl text-[var(--stage-paper)]">{step.title}</h3>
            <p className="mt-3 text-sm leading-7 text-[var(--stage-ink-soft)]">{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
