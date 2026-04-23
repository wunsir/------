import { Link } from 'react-router-dom'

import { PageHero } from '../../components/shared/PageHero'
import { SectionBlock } from '../../components/shared/SectionBlock'
import { ThemeLinkCard } from '../../components/shared/ThemeLinkCard'
import { themeRoutes, themeRouteBySlug } from '../../router/theme-pages'

const guideEntries = themeRoutes
  .filter((entry) => entry.meta.slug !== 'home')
  .sort((left, right) => {
    const leftOrder = left.recommendedOrder ?? Number.POSITIVE_INFINITY
    const rightOrder = right.recommendedOrder ?? Number.POSITIVE_INFINITY

    return leftOrder - rightOrder
  })

const directorSequence = [
  {
    title: '先被灯光吸住',
    body: '先进入王牌页，让光、幕、影、人四者的关系建立第一记忆点。',
    path: '/light-shadow',
    label: '光影美学',
  },
  {
    title: '再看刀口和骨架',
    body: '确认影人为何能动起来，理解材料、雕刻、上色与组装的工艺链路。',
    path: '/craft',
    label: '制作工艺',
  },
  {
    title: '最后落回今天',
    body: '把传统形式和今天的视觉传播连接起来，形成完整的作品闭环。',
    path: '/reborn',
    label: '当代新生',
  },
]

export function HomePage() {
  const homeEntry = themeRouteBySlug.home

  return (
    <div className="space-y-6">
      <PageHero
        accent={homeEntry.meta.accent}
        heroMode={homeEntry.meta.heroMode}
        intro={homeEntry.meta.intro}
        kicker={homeEntry.kicker}
        subtitle={homeEntry.meta.subtitle}
        title={homeEntry.meta.title}
        actions={
          <>
            <Link className="stage-cta" to="/light-shadow">
              先看王牌页
            </Link>
            <Link className="stage-link" to="/craft">
              从工艺入戏
            </Link>
          </>
        }
      />

      <SectionBlock
        description="首页不抢王牌页风头，而是像导演分镜一样把三个分主题按节奏摆上台面，让用户知道该先去哪、为什么去。"
        eyebrow="Curated Entry"
        title="今夜上演三折"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {guideEntries.map((entry) => (
            <ThemeLinkCard key={entry.path} entry={entry} />
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        description="首页像导演分镜一样给出建议顺序：先见最强光影，再回到工艺细部，最后把旧戏带入今天。你也可以随时改道。"
        eyebrow="Director Cue"
        title="先去哪一页"
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {directorSequence.map((item, index) => (
            <article key={item.path} className="stage-card space-y-4">
              <div className="flex items-center justify-between gap-3">
                <span className="font-display text-3xl text-[var(--stage-gold)]">
                  0{index + 1}
                </span>
                <Link className="stage-link" to={item.path}>
                  {item.label}
                </Link>
              </div>
              <div className="space-y-3">
                <h3 className="font-display text-2xl text-[var(--stage-paper)]">
                  {item.title}
                </h3>
                <p className="text-sm leading-7 text-[var(--stage-ink-soft)]">{item.body}</p>
              </div>
            </article>
          ))}
        </div>
      </SectionBlock>
    </div>
  )
}
