import type { ReactNode } from 'react'

type SectionBlockProps = {
  eyebrow: string
  title: string
  description: string
  children: ReactNode
}

export function SectionBlock({
  eyebrow,
  title,
  description,
  children,
}: SectionBlockProps) {
  return (
    <section className="stage-panel space-y-6 p-6 sm:p-8 lg:p-10">
      <header className="max-w-3xl space-y-4">
        <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[var(--stage-muted)]">
          {eyebrow}
        </p>
        <div className="space-y-3">
          <h2 className="font-display text-3xl text-[var(--stage-paper)] sm:text-4xl">
            {title}
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-[var(--stage-ink-soft)] sm:text-base">
            {description}
          </p>
        </div>
      </header>
      {children}
    </section>
  )
}
