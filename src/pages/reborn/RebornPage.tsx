import { PageHero } from '../../components/shared/PageHero'
import { SectionBlock } from '../../components/shared/SectionBlock'
import { themeRouteBySlug } from '../../router/theme-pages'
import { rebornTimeline } from './rebornContent'

export function RebornPage() {
  const pageEntry = themeRouteBySlug.reborn

  return (
    <div className="space-y-6">
      <PageHero
        accent={pageEntry.meta.accent}
        heroMode={pageEntry.meta.heroMode}
        intro={pageEntry.meta.intro}
        kicker={pageEntry.kicker}
        subtitle={pageEntry.meta.subtitle}
        title={pageEntry.meta.title}
      />

      <SectionBlock
        description="当代新生页暂时不做大体量案例库，而是先把三类延展方向的位置和叙事口径固定下来。"
        eyebrow="Reframed Today"
        title="让旧影继续进入今天"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {rebornTimeline.map((item) => (
            <article key={item.id} className="stage-card space-y-3">
              <h2 className="font-display text-3xl text-[var(--stage-paper)]">{item.title}</h2>
              <p className="text-sm leading-7 text-[var(--stage-ink-soft)]">{item.description}</p>
            </article>
          ))}
        </div>
      </SectionBlock>
    </div>
  )
}
