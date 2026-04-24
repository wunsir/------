import { PageHero } from '../../components/shared/PageHero'
import { SectionBlock } from '../../components/shared/SectionBlock'
import { themeRouteBySlug } from '../../router/theme-pages'
import {
  craftCharacters,
  craftLayers,
  craftPlays,
  craftTimeline,
} from './craftContent'
import { craftSourceShortlist } from './craftSources'

const craftAnchorSources = [
  craftSourceShortlist[0],
  craftSourceShortlist[1],
  craftSourceShortlist[4],
]

function CraftWorkbenchHero() {
  return (
    <aside className="craft-workbench-hero">
      <div className="craft-workbench-hero-topline">
        <span>工艺案台</span>
        <span>material / knife / joint</span>
      </div>
      <div className="craft-workbench-surface" aria-hidden="true">
        <div className="craft-hide-sheet" />
        <div className="craft-cutting-grid" />
        <div className="craft-tool craft-tool-knife" />
        <div className="craft-tool craft-tool-awl" />
        <div className="craft-joint-dot craft-joint-dot-one" />
        <div className="craft-joint-dot craft-joint-dot-two" />
        <div className="craft-joint-dot craft-joint-dot-three" />
      </div>
      <dl className="craft-workbench-notes">
        <div>
          <dt>透光校验</dt>
          <dd>厚薄、纹孔、色层都要先在灯下看一遍。</dd>
        </div>
        <div>
          <dt>关节定位</dt>
          <dd>头杆和手杆的位置，会影响抬手和回身。</dd>
        </div>
      </dl>
    </aside>
  )
}

function CraftSourceAnchors() {
  return (
    <aside aria-labelledby="craft-source-anchor-title" className="source-anchor-strip craft-source-strip">
      <div className="source-anchor-copy">
        <p id="craft-source-anchor-title" className="source-anchor-eyebrow">
          资料依据
        </p>
        <p>
          这里不做资料库，只列出几条公开资料，说明材料、刀工和关节判断从哪里来。
        </p>
      </div>
      <div className="source-anchor-list">
        {craftAnchorSources.map((source) => (
          <article key={source.id} className="source-anchor-card">
            <h3>{source.anchor}</h3>
            <p>{source.focus}</p>
          </article>
        ))}
      </div>
    </aside>
  )
}

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
        aside={<CraftWorkbenchHero />}
      />

      <SectionBlock
        description="先看材料、刀口、颜色和关节怎样接在一起。"
        eyebrow="制作步骤"
        title="一张皮，怎样变成影人"
      >
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {craftTimeline.map((item, index) => (
            <article key={item.id} className="stage-card craft-process-card space-y-4">
              <div className="flex items-end justify-between gap-3">
                <span className="font-display text-3xl text-[var(--stage-gold)]">
                  0{index + 1}
                </span>
                <span className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">
                  {item.phase}
                </span>
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-2xl text-[var(--stage-paper)]">{item.title}</h3>
                <p className="text-sm leading-7 text-[var(--stage-ink-soft)]">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        description="这里看角色，也看它背后的刀工、色层和关节安排。"
        eyebrow="角色做法"
        title="角色的样子，是一刀一刀做出来的"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {craftCharacters.map((card) => (
            <article key={card.id} className="stage-card craft-sample-card space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-3xl text-[var(--stage-paper)]">
                    {card.name}
                  </h3>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--stage-gold)]">
                    {card.roleType}
                  </span>
                </div>
                <p className="text-sm leading-7 text-[var(--stage-ink-soft)]">{card.description}</p>
              </div>

              <dl className="space-y-3 text-sm text-[var(--stage-ink-soft)]">
                <div>
                  <dt className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">
                    工艺特点
                  </dt>
                  <dd>{card.temperament}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">
                    常见剧目
                  </dt>
                  <dd>{card.featuredIn.join(' / ')}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">
                    参考来源
                  </dt>
                  <dd>{card.originStyle}</dd>
                </div>
              </dl>

              <div className="flex flex-wrap gap-2">
                {card.tags.map((tag) => (
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
        description="这些片段不是剧目介绍，而是看一出戏上幕前，材料和动作怎样准备好。"
        eyebrow="台后片段"
        title="把材料和关节放回台后看"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {craftPlays.map((play) => (
            <article key={play.id} className="stage-card craft-sample-card space-y-5">
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

              <dl className="space-y-3 text-sm text-[var(--stage-ink-soft)]">
                <div>
                  <dt className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">
                    关联角色
                  </dt>
                  <dd>{play.relatedCharacters.join(' / ')}</dd>
                </div>
              </dl>

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
        description="材料、雕刻、上色、组装各自负责什么，最终都要回到灯下效果。"
        eyebrow="工艺拆解"
        title="图案之外，还有厚薄、透光和杆路"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {craftLayers.map((layer) => (
            <article key={layer.id} className="stage-card craft-layer-card space-y-5">
              <div className="flex items-start justify-between gap-3">
                <div className="space-y-3">
                  <p className="text-xs uppercase tracking-[0.32em] text-[var(--stage-muted)]">
                    {layer.phase}
                  </p>
                  <h3 className="font-display text-3xl text-[var(--stage-paper)]">
                    {layer.title}
                  </h3>
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--stage-gold)]">
                  工艺拆解
                </span>
              </div>

              <p className="text-sm leading-7 text-[var(--stage-ink-soft)]">{layer.detail}</p>

              <dl className="space-y-3 text-sm text-[var(--stage-ink-soft)]">
                <div>
                  <dt className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">
                    做法重点
                  </dt>
                  <dd>{layer.craftFocus}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">
                    灯下效果
                  </dt>
                  <dd>{layer.stageEffect}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <CraftSourceAnchors />
      </SectionBlock>
    </div>
  )
}
