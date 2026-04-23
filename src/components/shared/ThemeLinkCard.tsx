import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import type { ThemeRouteEntry } from '../../types/shadow-puppetry'

type ThemeLinkCardProps = {
  entry: ThemeRouteEntry
}

export function ThemeLinkCard({ entry }: ThemeLinkCardProps) {
  return (
    <motion.article
      className="stage-card group flex h-full flex-col justify-between gap-6"
      transition={{ duration: 0.25 }}
      whileHover={{ y: -6 }}
    >
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs uppercase tracking-[0.35em] text-[var(--stage-muted)]">
            {entry.kicker}
          </span>
          {entry.recommendedOrder === 1 ? (
            <span className="rounded-full border border-[rgba(240,197,112,0.24)] bg-[rgba(240,197,112,0.08)] px-3 py-1 text-xs text-[var(--stage-gold)]">
              推荐先看
            </span>
          ) : null}
        </div>
        <div className="space-y-3">
          <h3 className="font-display text-3xl text-[var(--stage-paper)]">
            {entry.navLabel}
          </h3>
          <p className="text-sm leading-7 text-[var(--stage-ink-soft)]">{entry.meta.subtitle}</p>
        </div>
      </div>
      <Link
        aria-label={`进入${entry.navLabel}`}
        className="inline-flex items-center gap-3 text-sm font-medium text-[var(--stage-paper)] transition group-hover:text-[var(--stage-gold)]"
        to={entry.path}
      >
        进入章节
        <span aria-hidden="true" className="text-lg">
          →
        </span>
      </Link>
    </motion.article>
  )
}
