import type { ThemeRouteEntry } from '../types/shadow-puppetry'

export const themeRoutes: ThemeRouteEntry[] = [
  {
    path: '/',
    navLabel: '首页',
    kicker: '开场导览',
    meta: {
      slug: 'home',
      title: '一戏入影',
      subtitle: '幕布拉开，一盏灯照出纸上的人。',
      intro:
        '首页只做一件事：用戏台、幕布和三张导览卡，把你带到皮影戏最有记忆点的地方。',
      accent: 'gold',
      heroMode: 'curtain',
    },
  },
  {
    path: '/craft',
    navLabel: '制作工艺',
    kicker: '刀口与关节',
    meta: {
      slug: 'craft',
      title: '影人怎样做成',
      subtitle: '一张皮要经过刮薄、雕刻、上色和装杆，才能在灯下动起来。',
      intro:
        '这里看的是幕后手艺：材料怎么处理，刀口怎么落，关节和操纵杆怎样让影人跟着手上的动作走。',
      accent: 'crimson',
      heroMode: 'craft',
    },
    recommendedOrder: 2,
  },
  {
    path: '/light-shadow',
    navLabel: '灯与影',
    kicker: '光、幕与人',
    meta: {
      slug: 'light-shadow',
      title: '灯亮，影就活了',
      subtitle: '灯、幕、影和操演的人配合起来，皮影戏的神采才出来。',
      intro:
        '这一页先让你动一动灯，再看台后的手和台前的角色如何接上。',
      accent: 'amber',
      heroMode: 'shadow',
    },
    recommendedOrder: 1,
  },
  {
    path: '/reborn',
    navLabel: '今天的皮影',
    kicker: '今天的皮影',
    meta: {
      slug: 'reborn',
      title: '皮影来到今天',
      subtitle: '它不只留在老戏台上，也会出现在展陈、课程、海报和舞台里。',
      intro:
        '这一页先看皮影形象怎么整理，再看它怎样走进展陈、课程和舞台。',
      accent: 'paper',
      heroMode: 'modern',
    },
    recommendedOrder: 3,
  },
]

export const themeRouteBySlug = Object.fromEntries(
  themeRoutes.map((entry) => [entry.meta.slug, entry]),
) as Record<ThemeRouteEntry['meta']['slug'], ThemeRouteEntry>
