import type { CharacterCard, PlayCard, TimelineStep } from '../../types/shadow-puppetry'

export type RebornTrack = {
  id: string
  title: '传播方式更新' | '表演更新' | '视觉再设计更新'
  summary: string
  presentTense: string
  retainedCore: string
}

export const rebornTimeline: TimelineStep[] = [
  {
    id: 'visual-redesign',
    title: '视觉再设计：轮廓提纯与纹样简化',
    phase: '视觉更新',
    description:
      '把传统影人轮廓拆成可复用的线面关系，保留头饰、袖口、兵器等识别点，再做纹样简化与比例重排。',
    kind: 'process',
  },
  {
    id: 'museum-display',
    title: '展陈更新：博物馆导览与教育工作坊',
    phase: '传播更新',
    description:
      '在博物馆与非遗馆中，通过导览图、互动投影和工作坊，让观众先看懂轮廓与透光逻辑，再进入故事。',
    kind: 'performance',
  },
  {
    id: 'media-distribution',
    title: '传播更新：短视频与文创视觉',
    phase: '传播更新',
    description:
      '以短视频分镜、海报和包装延展传播皮影元素，强调一眼可识别的剪影与纹样，不依赖虚构世界观。',
    kind: 'history',
  },
  {
    id: 'stage-collab',
    title: '表演更新：多媒体舞台协同',
    phase: '表演更新',
    description:
      '在现代剧场里把皮影与真人、投影和灯光并置，保留操演节奏，让传统动作在新舞台语法中可读。',
    kind: 'performance',
  },
]

export const rebornCharacters: CharacterCard[] = [
  {
    id: 'visual-sheng',
    name: '剪影提纯武生样本',
    roleType: '武生',
    temperament: '轮廓简明、动作线突出、识别快',
    featuredIn: ['高校视觉传达课程公开作业', '博物馆教育工作坊'],
    originStyle: '轮廓提纯与比例重排',
    description:
      '保留武生抬臂、亮兵器等关键姿态，把复杂装饰减到最小，优先保证一眼识别与后续媒介适配。',
    tags: ['轮廓提纯', '纹样减法', '角色识别'],
  },
  {
    id: 'motif-dan',
    name: '纹样简化旦角样本',
    roleType: '旦角',
    temperament: '装饰减法、色层克制、线面平衡',
    featuredIn: ['文创海报与包装公开案例', '非遗主题视觉展板'],
    originStyle: '纹样重组与色层压缩',
    description:
      '旦角服饰纹样转为更清晰的线面模块，减少堆叠细节，保留发饰与袖口识别点，便于跨媒介统一。',
    tags: ['纹样简化', '色层压缩', '平面转译'],
  },
  {
    id: 'exhibition-jing',
    name: '展陈放大净角样本',
    roleType: '净角',
    temperament: '结构放大、信息清晰、现场导览友好',
    featuredIn: ['博物馆展陈导览', '公共文化空间装置'],
    originStyle: '展陈尺度重构',
    description:
      '净角脸谱保留主线和色块关系，在展陈中放大后仍可读，让观众先理解结构，再进入戏曲语境。',
    tags: ['博物馆展陈', '尺度重构', '现场阅读'],
  },
]

export const rebornPlays: PlayCard[] = [
  {
    id: 'reborn-play-1',
    title: '博物馆展陈：皮影轮廓导览样本',
    sceneHook: '先让观众看清轮廓和透光，再讲角色和剧情。',
    summary:
      '通过展签、分层图与近距离灯照演示，把“为什么像皮影”解释清楚，视觉再设计不脱离工艺来源。',
    relatedCharacters: ['剪影提纯武生样本', '展陈放大净角样本'],
    stageMood: '清晰、克制、可读',
    tags: ['博物馆展陈', '导览图', '视觉再设计'],
  },
  {
    id: 'reborn-play-2',
    title: '多媒体舞台：影偶与真人同台样本',
    sceneHook: '灯光切换时，影偶动作与真人走位同步，观众能同时读到传统与当代。',
    summary:
      '以多媒体舞台作为表演更新辅助线，核心仍是影偶节奏与轮廓识别，避免把技术效果当成主角。',
    relatedCharacters: ['纹样简化旦角样本'],
    stageMood: '协调、现场感、节奏明确',
    tags: ['多媒体舞台', '表演更新', '协同演出'],
  },
]

export const rebornTracks: RebornTrack[] = [
  {
    id: 'reborn-visual',
    title: '视觉再设计更新',
    summary:
      '先做轮廓提纯与纹样简化，再做比例重排与媒介适配。视觉更新不是加特效，而是先保住识别核心。',
    presentTense:
      '当前最有效的转译方式，是把角色识别点和纹样逻辑变成跨海报、导览、短视频都能复用的视觉语法。',
    retainedCore: '无论载体如何变化，剪影轮廓、透光关系与行当辨识都必须一眼成立。',
  },
  {
    id: 'reborn-distribution',
    title: '传播方式更新',
    summary: '传播入口从单一戏台转到博物馆展陈、短视频与文创视觉，让更多人先从画面识别皮影。',
    presentTense:
      '今天的传播以小而准的入口为主：一条短视频片段、一张导览图、一套视觉物料都能成为初次接触点。',
    retainedCore: '真正被保留下来的，仍是剪影、透光与人物轮廓的辨识度。',
  },
  {
    id: 'reborn-performance',
    title: '表演更新',
    summary: '表演更新更多发生在多媒体舞台协同，但它仍是辅助线，目标是让传统操演节奏在新空间里被读懂。',
    presentTense: '当前更常见的是影偶、真人、投影并置，让观众在同一场景中同时读取动作与光影关系。',
    retainedCore: '影偶一旦遇光而动，人物由节奏被读出来的核心机制并没有改变。',
  },
]
