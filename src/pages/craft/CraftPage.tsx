import { PageHero } from '../../components/shared/PageHero'
import { SectionBlock } from '../../components/shared/SectionBlock'
import { themeRouteBySlug } from '../../router/theme-pages'
import { craftTimeline } from './craftContent'

export function CraftPage() {
  const pageEntry = themeRouteBySlug.craft

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
        description="这一页目前先冻结工艺主线和承载结构，方便后续窗口继续补真实资料、流程拆解和角色构造图。"
        eyebrow="Craft Spine"
        title="从一张皮到一位影人"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {craftTimeline.map((item) => (
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
