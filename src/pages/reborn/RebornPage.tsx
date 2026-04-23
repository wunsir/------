import { PageHero } from '../../components/shared/PageHero'
import { SectionBlock } from '../../components/shared/SectionBlock'
import { themeRouteBySlug } from '../../router/theme-pages'
import {
  rebornCharacters,
  rebornPlays,
  rebornTimeline,
  rebornTracks,
} from './rebornContent'

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
        description="当代新生页先让用户看到演变链路：它怎样改入口、改媒介、改叙事，但仍保留皮影最核心的辨识度。"
        eyebrow="Reframed Today"
        title="让旧影继续进入今天"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {rebornTimeline.map((item, index) => (
            <article key={item.id} className="stage-card space-y-4">
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
        description="角色卡模块不去追求炫技，而是把当代改写落在具体人物上：哪一部分被删减，哪一部分被放大，为什么仍然像皮影。"
        eyebrow="Rewritten Roles"
        title="角色先被重写，气质才会变成今天的语言"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {rebornCharacters.map((card) => (
            <article key={card.id} className="stage-card space-y-5">
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
        description="展演与案例模块负责把“更新”落在真实观看经验上，让用户看到皮影如何离开传统戏台，却没有失去现场感。"
        eyebrow="Cases & Shows"
        title="当代案例不是注脚，而是新的演出现场"
      >
        <div className="grid gap-4 lg:grid-cols-2">
          {rebornPlays.map((play) => (
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
        description="这里不把更新写成趋势口号，而是把三条真正的变化轨道拆开：入口变了、表演关系变了、视觉句法也变了。"
        eyebrow="Update Tracks"
        title="更新不是换皮，而是换入口、换表演、换视觉句法"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {rebornTracks.map((track) => (
            <article key={track.id} className="stage-card space-y-5">
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
      </SectionBlock>
    </div>
  )
}
