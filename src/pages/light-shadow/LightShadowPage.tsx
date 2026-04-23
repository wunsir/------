import { startTransition, useState } from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import { PageHero } from '../../components/shared/PageHero'
import { SectionBlock } from '../../components/shared/SectionBlock'
import { themeRouteBySlug } from '../../router/theme-pages'
import type { CharacterRoleFilter } from '../../types/shadow-puppetry'
import {
  characterCards,
  characterRoleFilters,
  performanceTimeline,
  playCards,
} from './lightShadowContent'

export function LightShadowPage() {
  const [selectedFilter, setSelectedFilter] = useState<CharacterRoleFilter>('all')
  const pageEntry = themeRouteBySlug['light-shadow']

  const filteredCharacters =
    selectedFilter === 'all'
      ? characterCards
      : characterCards.filter((card) => card.roleType === selectedFilter)

  return (
    <div className="space-y-6">
      <PageHero
        accent={pageEntry.meta.accent}
        heroMode={pageEntry.meta.heroMode}
        intro={pageEntry.meta.intro}
        kicker={pageEntry.kicker}
        subtitle={pageEntry.meta.subtitle}
        title={pageEntry.meta.title}
        aside={
          <div className="stage-panel relative overflow-hidden p-6">
            <div className="absolute inset-x-8 top-8 h-32 rounded-full bg-[radial-gradient(circle,rgba(255,208,132,0.48)_0%,rgba(255,183,84,0.18)_42%,rgba(255,183,84,0)_72%)] blur-2xl" />
            <div className="absolute inset-x-8 bottom-8 h-px bg-white/12" />
            <div className="relative flex min-h-[20rem] items-end justify-center">
              <motion.div
                animate={{ rotate: [-1.5, 1.5, -1.5] }}
                className="absolute bottom-14 h-40 w-28 rounded-[48%_48%_38%_38%] bg-[linear-gradient(180deg,rgba(8,8,8,0.98),rgba(17,12,12,0.9))]"
                transition={{ duration: 5, ease: 'easeInOut', repeat: Number.POSITIVE_INFINITY }}
              />
              <div className="light-beam absolute bottom-18 h-44 w-64 rounded-[50%]" />
              <div className="absolute bottom-4 h-12 w-44 rounded-full bg-[rgba(0,0,0,0.48)] blur-xl" />
              <div className="absolute right-9 top-10 space-y-2 rounded-2xl border border-white/10 bg-[rgba(12,10,10,0.54)] px-4 py-3 text-right">
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--stage-muted)]">
                  幕布之后
                </p>
                <p className="font-display text-2xl text-[var(--stage-paper)]">一盏灯</p>
                <p className="text-sm text-[var(--stage-ink-soft)]">把人物先照成影，再照成戏。</p>
              </div>
            </div>
          </div>
        }
      />

      <SectionBlock
        description="搜索 / 筛选在 MVP 中不做复杂检索，而是把角色类型当作一组导演开关。切换一次，整组人物气质就会变。"
        eyebrow="Character Filter"
        title="先看谁被灯点亮"
      >
        <div className="flex flex-wrap gap-3">
          {characterRoleFilters.map((filter) => (
            <button
              key={filter.value}
              className={[
                'rounded-full border px-4 py-2 text-sm transition',
                selectedFilter === filter.value
                  ? 'border-[rgba(240,197,112,0.34)] bg-[rgba(240,197,112,0.12)] text-[var(--stage-paper)]'
                  : 'border-white/10 bg-[rgba(255,255,255,0.03)] text-[var(--stage-ink-soft)] hover:border-white/20 hover:text-[var(--stage-paper)]',
              ].join(' ')}
              onClick={() => {
                startTransition(() => {
                  setSelectedFilter(filter.value)
                })
              }}
              type="button"
            >
              {filter.label}
            </button>
          ))}
        </div>

        <p aria-live="polite" className="text-sm text-[var(--stage-muted)]">
          当前筛选：{selectedFilter === 'all' ? '全部' : selectedFilter}
        </p>

        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
          <AnimatePresence mode="popLayout">
            {filteredCharacters.map((card) => (
              <motion.article
                key={card.id}
                animate={{ opacity: 1, scale: 1 }}
                className="stage-card space-y-4"
                exit={{ opacity: 0, scale: 0.95 }}
                initial={{ opacity: 0, scale: 0.95 }}
                layout
                transition={{ duration: 0.22 }}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-display text-3xl text-[var(--stage-paper)]">
                      {card.name}
                    </h3>
                    <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--stage-gold)]">
                      {card.roleType}
                    </span>
                  </div>
                  <p className="text-sm leading-7 text-[var(--stage-ink-soft)]">
                    {card.description}
                  </p>
                </div>
                <dl className="space-y-3 text-sm text-[var(--stage-ink-soft)]">
                  <div>
                    <dt className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">
                      气质
                    </dt>
                    <dd>{card.temperament}</dd>
                  </div>
                  <div>
                    <dt className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">
                      常见剧目
                    </dt>
                    <dd>{card.featuredIn.join(' / ')}</dd>
                  </div>
                </dl>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </SectionBlock>

      <SectionBlock
        description="剧目卡片不讲完整故事，而是抓一个能立刻被看见的舞台瞬间。用户先被场景吸住，再去理解角色和戏。"
        eyebrow="Scene Hook"
        title="万象成影"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {playCards.map((play) => (
            <article key={play.id} className="stage-card space-y-5">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--stage-muted)]">
                  {play.stageMood}
                </p>
                <h3 className="font-display text-3xl text-[var(--stage-paper)]">
                  {play.title}
                </h3>
                <p className="text-base leading-7 text-[var(--stage-paper)]/88">
                  {play.sceneHook}
                </p>
              </div>
              <p className="text-sm leading-7 text-[var(--stage-ink-soft)]">{play.summary}</p>
              <div className="flex flex-wrap gap-2">
                {play.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--stage-ink-soft)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        description="时间线这里只做“一场戏如何被点亮”的主链路。历史信息可以后续补，但不能稀释掉戏台上的即时感。"
        eyebrow="Performance Timeline"
        title="一场戏如何从幕后走到幕前"
      >
        <div className="grid gap-4 lg:grid-cols-4">
          {performanceTimeline.map((step, index) => (
            <article key={step.id} className="stage-card space-y-4">
              <div className="flex items-end justify-between gap-3">
                <span className="font-display text-3xl text-[var(--stage-gold)]">
                  0{index + 1}
                </span>
                <span className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">
                  {step.phase}
                </span>
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-2xl text-[var(--stage-paper)]">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-[var(--stage-ink-soft)]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>
    </div>
  )
}
