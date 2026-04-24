import { PageHero } from '../../components/shared/PageHero'
import { SectionBlock } from '../../components/shared/SectionBlock'
import { themeRouteBySlug } from '../../router/theme-pages'
import {
  rebornCharacters,
  rebornPlays,
  rebornTimeline,
  rebornTracks,
} from './rebornContent'
import { rebornSourceShortlist } from './rebornSources'

const rebornAnchorSources = [
  rebornSourceShortlist[0],
  rebornSourceShortlist[1],
  rebornSourceShortlist[2],
]

function RebornArchiveHero() {
  return (
    <aside className="reborn-archive-hero">
      <div className="reborn-archive-hero-topline">
        <span>设计档案</span>
        <span>outline / motif / media</span>
      </div>
      <div className="reborn-archive-board" aria-hidden="true">
        <div className="reborn-archive-sheet reborn-archive-sheet-one" />
        <div className="reborn-archive-sheet reborn-archive-sheet-two" />
        <div className="reborn-motif-frame">
          <span />
          <span />
          <span />
        </div>
        <div className="reborn-archive-tag">visual update</div>
      </div>
      <dl className="reborn-archive-notes">
        <div>
          <dt>形象整理</dt>
          <dd>先保留剪影和行当特征，再减少纹样。</dd>
        </div>
        <div>
          <dt>更多去处</dt>
          <dd>展陈、课程和舞台，都是今天看见皮影的地方。</dd>
        </div>
      </dl>
    </aside>
  )
}

function RebornSourceAnchors() {
  return (
    <aside aria-labelledby="reborn-source-anchor-title" className="source-anchor-strip reborn-source-strip">
      <div className="source-anchor-copy">
        <p id="reborn-source-anchor-title" className="source-anchor-eyebrow">
          资料来源
        </p>
        <p>
          这里列出几条公开资料，说明展陈、课程和文创应用这些内容从哪里来。
        </p>
      </div>
      <div className="source-anchor-list">
        {rebornAnchorSources.map((source) => (
          <article key={source.id} className="source-anchor-card">
            <h3>{source.anchor}</h3>
            <p>{source.focus}</p>
          </article>
        ))}
      </div>
    </aside>
  )
}

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
        aside={<RebornArchiveHero />}
      />

      <SectionBlock
        description="先看轮廓、纹样和比例怎样被整理，剪影识别仍然要保留下来。"
        eyebrow="形象整理"
        title="先把影人的样子整理清楚"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {rebornTimeline.map((item, index) => (
            <article key={item.id} className="stage-card reborn-dossier-card space-y-4">
              <div className="flex items-end justify-between gap-3">
                <span className="font-display text-3xl text-[var(--stage-paper)]">
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
        description="这些卡片看的是具体人物：哪些细节可以减掉，哪些轮廓必须留下。"
        eyebrow="角色样式"
        title="保留一眼能认出的部分"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {rebornCharacters.map((card) => (
            <article key={card.id} className="stage-card reborn-dossier-card space-y-5">
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-display text-3xl text-[var(--stage-paper)]">
                    {card.name}
                  </h3>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--stage-paper)]/80">
                    {card.roleType}
                  </span>
                </div>
                <p className="text-sm leading-7 text-[var(--stage-ink-soft)]">{card.description}</p>
              </div>

              <dl className="space-y-3 text-sm text-[var(--stage-ink-soft)]">
                <div>
                  <dt className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">
                    设计特点
                  </dt>
                  <dd>{card.temperament}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">
                    进入场景
                  </dt>
                  <dd>{card.featuredIn.join(' / ')}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">
                    整理方式
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
        description="这里看皮影怎样走进展馆、课程和新的舞台，同时不让展陈方式或技术效果盖过皮影本身。"
        eyebrow="展陈与舞台"
        title="也在展馆和舞台里出现"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {rebornPlays.map((play) => (
            <article key={play.id} className="stage-card reborn-case-card space-y-5">
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
        description="最后把三件事放在一起看：形象怎么整理，人们在哪里看见它，它又怎样进入新的舞台。"
        eyebrow="今天在哪儿看见"
        title="今天的皮影，不只在老戏台上"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {rebornTracks.map((track) => (
            <article key={track.id} className="stage-card reborn-dossier-card space-y-5">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--stage-muted)]">
                  方向
                </p>
                <h3 className="font-display text-3xl text-[var(--stage-paper)]">
                  {track.title}
                </h3>
              </div>

              <p className="text-sm leading-7 text-[var(--stage-ink-soft)]">{track.summary}</p>

              <dl className="space-y-3 text-sm text-[var(--stage-ink-soft)]">
                <div>
                  <dt className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">
                    现在怎样做
                  </dt>
                  <dd>{track.presentTense}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">
                    保留下来的部分
                  </dt>
                  <dd>{track.retainedCore}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
        <RebornSourceAnchors />
      </SectionBlock>
    </div>
  )
}
