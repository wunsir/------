import { Link } from 'react-router-dom'

import { themeRoutes } from '../../../router/theme-pages'

type HomeGuideDeckProps = {
  visible: boolean
}

const guideCopy = {
  'light-shadow': {
    eyebrow: '先看光影',
    line: '先动一动灯，看影子怎样在幕上变清楚。',
    toneClassName: 'home-guide-card-amber',
  },
  craft: {
    eyebrow: '再看手艺',
    line: '从牛皮、刀口、颜色到关节，看影人怎样做出来。',
    toneClassName: 'home-guide-card-crimson',
  },
  reborn: {
    eyebrow: '再看今天',
    line: '看皮影形象怎样出现在展陈、课程和新的视觉设计里。',
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
              aria-label={`查看${entry.navLabel}`}
              className="home-guide-card-link"
              to={entry.path}
            >
              查看
            </Link>
          </article>
        )
      })}
    </div>
  )
}
