import type { CharacterCard, PlayCard, TimelineStep } from '../../types/shadow-puppetry'

export type RebornTrack = {
  id: string
  title: '新的传播场景' | '新的舞台配合' | '形象整理'
  summary: string
  presentTense: string
  retainedCore: string
}

export const rebornTimeline: TimelineStep[] = [
  {
    id: 'visual-redesign',
    title: '整理形象：简化轮廓和纹样',
    phase: '形象整理',
    description:
      '把传统影人的轮廓先整理出来，保留头饰、袖口、兵器等识别点，再减少过密的纹样和比例细节。',
    kind: 'process',
  },
  {
    id: 'museum-display',
    title: '走进展馆：导览和教育工作坊',
    phase: '展馆里',
    description:
      '在博物馆和非遗馆里，导览图、投影和工作坊会先讲清轮廓与透光，再把观众带进故事。',
    kind: 'performance',
  },
  {
    id: 'media-distribution',
    title: '走进日常：短视频、海报和包装',
    phase: '日常里',
    description:
      '短视频、海报和包装更需要一眼看懂。皮影元素通常先保留剪影和纹样，再适配不同画面尺寸。',
    kind: 'history',
  },
  {
    id: 'stage-collab',
    title: '走上新舞台：和真人、投影一起演',
    phase: '舞台上',
    description:
      '在现代剧场里，皮影可以和真人、投影、灯光一起出现。只要操演节奏还在，传统动作仍能被看懂。',
    kind: 'performance',
  },
]

export const rebornCharacters: CharacterCard[] = [
  {
    id: 'visual-sheng',
    name: '剪影简化武生',
    roleType: '武生',
    temperament: '轮廓清楚、动作线突出，容易识别',
    featuredIn: ['高校视觉传达课程公开作业', '博物馆教育工作坊'],
    originStyle: '保留轮廓，调整比例',
    description:
      '保留武生抬臂、亮兵器等关键姿态，把复杂装饰减到较少，让人先认出角色。',
    tags: ['轮廓简化', '纹样减法', '角色识别'],
  },
  {
    id: 'motif-dan',
    name: '纹样简化旦角',
    roleType: '旦角',
    temperament: '装饰减少、色层克制，线面更清楚',
    featuredIn: ['文创海报与包装公开案例', '非遗主题视觉展板'],
    originStyle: '纹样整理与色层控制',
    description:
      '旦角服饰纹样可以整理成更清楚的线面关系，减少堆叠细节，保留发饰和袖口这些识别点。',
    tags: ['纹样简化', '色层控制', '平面应用'],
  },
  {
    id: 'exhibition-jing',
    name: '展陈放大净角',
    roleType: '净角',
    temperament: '结构放大、信息清楚，适合现场导览',
    featuredIn: ['博物馆展陈导览', '公共文化空间装置'],
    originStyle: '展陈尺度放大',
    description:
      '净角脸谱保留主线和色块关系，放大到展陈尺度后仍然清楚，观众可以先看懂结构。',
    tags: ['博物馆展陈', '尺度放大', '现场阅读'],
  },
]

export const rebornPlays: PlayCard[] = [
  {
    id: 'reborn-play-1',
    title: '博物馆展陈：看清皮影轮廓',
    sceneHook: '先让观众看清轮廓和透光，再讲角色和剧情。',
    summary:
      '展签、分层图和近距离灯照演示，可以把“为什么像皮影”讲清楚，也让新的设计不离开工艺来源。',
    relatedCharacters: ['剪影简化武生', '展陈放大净角'],
    stageMood: '清楚、克制、好懂',
    tags: ['博物馆展陈', '导览图', '形象整理'],
  },
  {
    id: 'reborn-play-2',
    title: '多媒体舞台：影偶与真人同台',
    sceneHook: '灯光切换时，影偶动作与真人走位同步，观众能同时读到传统与当代。',
    summary:
      '这类舞台尝试，重点仍是影偶节奏和轮廓识别，不让技术效果盖过皮影本身。',
    relatedCharacters: ['纹样简化旦角'],
    stageMood: '协调、现场感、节奏明确',
    tags: ['多媒体舞台', '舞台配合', '协同演出'],
  },
]

export const rebornTracks: RebornTrack[] = [
  {
    id: 'reborn-visual',
    title: '形象整理',
    summary:
      '先看轮廓和纹样，再考虑比例和不同画面。整理不是加特效，而是让人一眼认出这是皮影。',
    presentTense:
      '比较稳妥的做法，是把角色轮廓、头饰、袖口等识别点整理成海报、导览和短视频都能使用的图形。',
    retainedCore: '剪影、透光和行当特征要保留下来。',
  },
  {
    id: 'reborn-distribution',
    title: '新的传播场景',
    summary: '皮影不只在戏台上，也会出现在博物馆展陈、短视频和文创视觉里，更多人先从画面认识它。',
    presentTense:
      '一条短视频片段、一张导览图、一套视觉物料，都可能让人第一次接触皮影。',
    retainedCore: '剪影、透光和人物轮廓仍然是最重要的识别点。',
  },
  {
    id: 'reborn-performance',
    title: '新的舞台配合',
    summary: '在多媒体舞台里，皮影可以和真人、投影、灯光一起出现，重点仍是让传统操演节奏被看懂。',
    presentTense: '影偶、真人和投影可以放在同一场景中，让观众同时看到动作和光影关系。',
    retainedCore: '影偶遇光而动，人物靠节奏被看出来，这一点没有变。',
  },
]
