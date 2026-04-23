import { PageHero } from '../../components/shared/PageHero'
import { SectionBlock } from '../../components/shared/SectionBlock'
import { themeRouteBySlug } from '../../router/theme-pages'
import {
  craftCharacters,
  craftLayers,
  craftPlays,
  craftTimeline,
} from './craftContent'

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
        description="工艺页的主线不是历史罗列，而是一位影人如何从皮料、刀口、颜色到关节，最后走上幕布。"
        eyebrow="Craft Spine"
        title="从一张皮到一位影人"
      >
        <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
          {craftTimeline.map((item, index) => (
            <article key={item.id} className="stage-card space-y-4">
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
        description="工艺角色卡不只是在看人物形象，更是在看不同刀工、色层和组装逻辑如何决定一个行当的面相。"
        eyebrow="Crafted Roles"
        title="刀口之后，角色才真正有了面相"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {craftCharacters.map((card) => (
            <article key={card.id} className="stage-card space-y-5">
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
                    工艺气质
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
                    流派来源
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
        description="幕后场景卡把工艺重新放回戏台边缘去看。它们不是完整剧目介绍，而是让用户看见一出戏在幕后如何被做出来。"
        eyebrow="Backstage Scenes"
        title="幕后场景先把一出戏的骨肉搭起来"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {craftPlays.map((play) => (
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
        description="真正让工艺页成立的，是用户能读到材料、雕刻、上色、组装各自负责什么，以及它们如何共同把角色推上幕布。"
        eyebrow="Making Layers"
        title="一位影人的层次，不只在正面图案"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {craftLayers.map((layer) => (
            <article key={layer.id} className="stage-card space-y-5">
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
                  层次拆解
                </span>
              </div>

              <p className="text-sm leading-7 text-[var(--stage-ink-soft)]">{layer.detail}</p>

              <dl className="space-y-3 text-sm text-[var(--stage-ink-soft)]">
                <div>
                  <dt className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">
                    工艺重点
                  </dt>
                  <dd>{layer.craftFocus}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">
                    幕前结果
                  </dt>
                  <dd>{layer.stageEffect}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </SectionBlock>
    </div>
  )
}
