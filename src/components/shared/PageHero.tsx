import type { ReactNode } from 'react'

import { motion } from 'framer-motion'

import type { HeroMode, ThemeAccent } from '../../types/shadow-puppetry'

type PageHeroProps = {
  kicker: string
  title: string
  subtitle: string
  intro: string
  accent: ThemeAccent
  heroMode: HeroMode
  actions?: ReactNode
  aside?: ReactNode
}

const accentGlowMap: Record<ThemeAccent, string> = {
  gold: 'from-[rgba(255,214,130,0.34)] via-[rgba(244,173,83,0.14)]',
  crimson: 'from-[rgba(166,53,45,0.36)] via-[rgba(120,24,18,0.14)]',
  amber: 'from-[rgba(255,187,96,0.42)] via-[rgba(255,136,38,0.14)]',
  paper: 'from-[rgba(231,211,178,0.24)] via-[rgba(190,170,142,0.12)]',
}

const modeLabelMap: Record<HeroMode, string> = {
  curtain: '拉开幕布',
  craft: '刀口起势',
  shadow: '灯亮影现',
  modern: '旧影新幕',
}

function HeroTableau({ heroMode, accent }: Pick<PageHeroProps, 'heroMode' | 'accent'>) {
  return (
    <div className="relative isolate overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(15,10,10,0.76)] p-6 shadow-[var(--shadow-stage)]">
      <div
        className={`absolute inset-x-6 top-5 h-40 rounded-full bg-gradient-to-b ${accentGlowMap[accent]} to-transparent blur-3xl`}
      />
      <div className="absolute inset-x-0 top-0 h-[1px] bg-white/12" />
      <div className="absolute inset-x-0 bottom-0 h-20 bg-[linear-gradient(180deg,rgba(0,0,0,0)_0%,rgba(3,2,2,0.65)_100%)]" />
      <div className="absolute inset-y-0 left-6 w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.18),transparent)]" />
      <div className="absolute inset-y-0 right-6 w-px bg-[linear-gradient(180deg,transparent,rgba(255,255,255,0.18),transparent)]" />

      <motion.div
        animate={{ y: [0, -10, 0] }}
        className="relative mx-auto mt-6 flex h-72 max-w-[18rem] items-end justify-center"
        transition={{ duration: 6, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY }}
      >
        <div className="absolute top-4 rounded-full border border-white/20 px-3 py-1 text-[11px] uppercase tracking-[0.35em] text-[var(--stage-paper)]/75">
          {modeLabelMap[heroMode]}
        </div>
        <div className="light-orb absolute left-1/2 top-10 h-28 w-28 -translate-x-1/2 rounded-full" />
        <div className="light-beam absolute left-1/2 top-16 h-44 w-52 -translate-x-1/2 rounded-[50%]" />
        <div className="shadow-puppet absolute bottom-8 h-36 w-28 rounded-[45%_45%_35%_35%] bg-[linear-gradient(180deg,rgba(13,12,12,0.98),rgba(5,5,5,0.92))] shadow-[0_20px_40px_rgba(0,0,0,0.35)]" />
        <div className="absolute bottom-0 h-3 w-full rounded-full bg-[rgba(0,0,0,0.52)] blur-md" />
        <div className="absolute bottom-0 left-1/2 h-28 w-[1px] -translate-x-1/2 bg-[linear-gradient(180deg,rgba(240,210,156,0)_0%,rgba(240,210,156,0.75)_100%)]" />
      </motion.div>
    </div>
  )
}

export function PageHero({
  kicker,
  title,
  subtitle,
  intro,
  accent,
  heroMode,
  actions,
  aside,
}: PageHeroProps) {
  return (
    <section className="stage-panel relative overflow-hidden px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
      <div
        className={`pointer-events-none absolute right-[-12%] top-[-8rem] h-[24rem] w-[24rem] rounded-full bg-gradient-to-br ${accentGlowMap[accent]} to-transparent blur-3xl`}
      />
      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:items-center">
        <div className="space-y-5">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.45em] text-[var(--stage-muted)]">
              {kicker}
            </p>
            <h1 className="font-display text-4xl leading-[0.95] text-[var(--stage-paper)] sm:text-6xl lg:text-7xl">
              {title}
            </h1>
          </div>
          <p className="max-w-2xl text-base leading-8 text-[var(--stage-paper)]/86 sm:text-xl">
            {subtitle}
          </p>
          <p className="max-w-2xl text-sm leading-7 text-[var(--stage-ink-soft)] sm:text-base">
            {intro}
          </p>
          {actions ? <div className="flex flex-wrap gap-3 pt-2">{actions}</div> : null}
        </div>
        <div>{aside ?? <HeroTableau heroMode={heroMode} accent={accent} />}</div>
      </div>
    </section>
  )
}
