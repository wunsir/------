import { Link } from 'react-router-dom'

import { themeRoutes } from '../../../router/theme-pages'

type HomeGuideDeckProps = {
  visible: boolean
}

const guideCopy = {
  'light-shadow': {
    eyebrow: '先入主戏',
    line: '先让一束灯把影子照活，再去看幕后操演如何成立。',
    toneClassName: 'home-guide-card-amber',
  },
  craft: {
    eyebrow: '再看筋骨',
    line: '刀口、关节、透光和组装，决定一位影人为什么能动。',
    toneClassName: 'home-guide-card-crimson',
  },
  reborn: {
    eyebrow: '最后回到今天',
    line: '旧影进入新幕，落到今天的展陈、传播和视觉再设计。',
    toneClassName: 'home-guide-card-paper',
  },
} as const

const guideEntries = themeRoutes
  .filter((entry) => entry.meta.slug !== 'home')
  .sort((left, right) => {
    const leftOrder = left.recommendedOrder ?? Number.POSITIVE_INFINITY
    const rightOrder = right.recommendedOrder ?? Number.POSITIVE_INFINITY

    return leftOrder - rightOrder
  })

export function HomeGuideDeck({ visible }: HomeGuideDeckProps) {
  if (!visible) {
    return null
  }

  return (
    <div className="home-guide-deck" aria-label="首页章节导览">
      {guideEntries.map((entry, index) => {
        const copy = guideCopy[entry.meta.slug as keyof typeof guideCopy]

        return (
          <article
            key={entry.path}
            className={`home-guide-card ${copy.toneClassName}`}
            style={{ transitionDelay: `${index * 90}ms` }}
          >
            <div className="home-guide-card-topline">
              <span>{copy.eyebrow}</span>
              <span className="home-guide-card-index">0{index + 1}</span>
            </div>
            <div className="space-y-3">
              <h2 className="home-guide-card-title">{entry.navLabel}</h2>
              <p className="home-guide-card-line">{copy.line}</p>
            </div>
            <Link
              aria-label={`进入${entry.navLabel}`}
              className="home-guide-card-link"
              to={entry.path}
            >
              进入章节
            </Link>
          </article>
        )
      })}
    </div>
  )
}
