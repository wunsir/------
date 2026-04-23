import type { ThemeRouteEntry } from '../types/shadow-puppetry'

export const themeRoutes: ThemeRouteEntry[] = [
  {
    path: '/',
    navLabel: '首页',
    kicker: '总导演页',
    meta: {
      slug: 'home',
      title: '一戏入影',
      subtitle: '先拉开幕，再让一盏灯把影子照活。',
      intro:
        '首页负责定调，不做百科堆叠，只用戏台、幕布与导览节奏把用户送进皮影戏的核心记忆点。',
      accent: 'gold',
      heroMode: 'curtain',
    },
  },
  {
    path: '/craft',
    navLabel: '制作工艺',
    kicker: '刀口与骨架',
    meta: {
      slug: 'craft',
      title: '雕一身骨',
      subtitle: '从选皮到组装，影人的筋骨都藏在刀口和关节里。',
      intro:
        '制作工艺页强调手作感和层次感，适合后续窗口继续填充工艺步骤、材料细节和角色构造说明。',
      accent: 'crimson',
      heroMode: 'craft',
    },
    recommendedOrder: 2,
  },
  {
    path: '/light-shadow',
    navLabel: '光影美学',
    kicker: '王牌页',
    meta: {
      slug: 'light-shadow',
      title: '灯亮，影便活了',
      subtitle: '把光、幕、影、人四者最迷人的关系，压缩在一页里点亮。',
      intro:
        '这一页承担全站最强记忆点：先被灯光吸住，再看到幕后的操演逻辑，最后落回角色与剧目的舞台瞬间。',
      accent: 'amber',
      heroMode: 'shadow',
    },
    recommendedOrder: 1,
  },
  {
    path: '/reborn',
    navLabel: '当代新生',
    kicker: '旧影新幕',
    meta: {
      slug: 'reborn',
      title: '旧影入新幕',
      subtitle: '皮影戏不是被封存的旧东西，而是仍能进入今天视觉语境的活内容。',
      intro:
        '当代新生页聚焦视觉再设计、传播语境更新和现代展陈形式，为后续扩写当代案例预留了清晰插槽。',
      accent: 'paper',
      heroMode: 'modern',
    },
    recommendedOrder: 3,
  },
]

export const themeRouteBySlug = Object.fromEntries(
  themeRoutes.map((entry) => [entry.meta.slug, entry]),
) as Record<ThemeRouteEntry['meta']['slug'], ThemeRouteEntry>
