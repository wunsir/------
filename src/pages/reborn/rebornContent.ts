import type { CharacterCard, PlayCard, TimelineStep } from '../../types/shadow-puppetry'

export const rebornTimeline: TimelineStep[] = [
  {
    id: 'visual-redesign',
    title: '视觉解构：提纯基因',
    phase: '视觉更新',
    description: '剥离冗余的古典装饰，提纯皮影最核心的剪影边缘与撞色基因。把它转译为一套更冷静、更现代的视觉语言。',
    kind: 'process',
  },
  {
    id: 'performance-innovation',
    title: '文本重塑：当代镜面',
    phase: '表演更新',
    description: '不用老调唱旧事。拿古老的光影做载体，投射城市边缘的聚散，或科幻失重的虚实，让古老叙事重击当下痛点。',
    kind: 'process',
  },
  {
    id: 'media-expansion',
    title: '舞台扩张：跨越幕布',
    phase: '传播更新',
    description: '不再局限于三尺生绢。灯箱、数字屏、交互投影都可以成为新幕布。它从后台走向了沉浸式展厅。',
    kind: 'performance',
  },
]

export const rebornCharacters: CharacterCard[] = [
  {
    id: 'cyber-wukong',
    name: '赛博行者',
    roleType: '武生',
    temperament: '冷峻、电子感、未来重组',
    featuredIn: ['大闹元宇宙'],
    originStyle: '当代数字新造',
    description: '将传统戏装解构为数码几何体，保留了翻打腾挪的张力，却彻底置换了它的生存底座。',
    tags: ['视觉更新', '跨界实验', '数字重构'],
  },
]

export const rebornPlays: PlayCard[] = [
  {
    id: 'reborn-play',
    title: '幻像：2049',
    sceneHook: '当聚光灯切换成激光冷源，这块幕布连接的是赛博未来。',
    summary: '一场用现代声光电包装的实验现场。丢掉传统剧本，剩下的只有剥离到极致的剪影动作和电子脉冲。',
    relatedCharacters: ['赛博行者'],
    stageMood: '先锋、电子、冷光源',
    tags: ['光影装置', '数字舞台'],
  },
]
