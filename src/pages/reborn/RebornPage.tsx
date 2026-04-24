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
        <span>转译档案</span>
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
          <dt>视觉再设计</dt>
          <dd>先保留剪影和行当识别，再压缩纹样。</dd>
        </div>
        <div>
          <dt>辅助更新</dt>
          <dd>展陈、传播和表演只作为进入路径。</dd>
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
          来源线索
        </p>
        <p>
          页面只保留与视觉更新直接相关的公开线索，传播和表演资料作为辅助依据呈现。
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
        description="当代新生页先看视觉怎样被重新整理：轮廓、纹样、比例和媒介入口改变，但剪影识别仍要成立。"
        eyebrow="视觉链路"
        title="旧影进入今天，先从视觉句法开始"
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
        description="角色卡模块把当代改写落在具体人物上：哪一部分被删减，哪一部分被放大，为什么仍然像皮影。"
        eyebrow="视觉档案"
        title="先改轮廓、纹样和媒介语法"
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
                    当代气质
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
                    转译方式
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
        description="展演与案例模块只做辅助线：让用户看到皮影如何离开传统戏台，同时不让技术效果盖过视觉识别。"
        eyebrow="传播与表演"
        title="传播和表演，服务于视觉更新的入口"
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
        description="这里不把更新写成趋势口号，而是把三条真正的变化轨道拆开：入口变了、表演关系变了、视觉句法也变了。"
        eyebrow="更新轨道"
        title="更新不是换皮，而是换入口、换表演、换视觉句法"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {rebornTracks.map((track) => (
            <article key={track.id} className="stage-card reborn-dossier-card space-y-5">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.32em] text-[var(--stage-muted)]">
                  更新脉络
                </p>
                <h3 className="font-display text-3xl text-[var(--stage-paper)]">
                  {track.title}
                </h3>
              </div>

              <p className="text-sm leading-7 text-[var(--stage-ink-soft)]">{track.summary}</p>

              <dl className="space-y-3 text-sm text-[var(--stage-ink-soft)]">
                <div>
                  <dt className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">
                    今天如何发生
                  </dt>
                  <dd>{track.presentTense}</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">
                    仍被保留的核心
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
