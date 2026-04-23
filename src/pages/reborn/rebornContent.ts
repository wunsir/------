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
    title: '视觉解构：提纯基因',
    phase: '视觉更新',
    description: '剥离冗余的古典装饰，提纯皮影最核心的剪影边缘与镂空基因。将其转译为一套更冷静、更适应当代的视觉设计语言。',
    kind: 'process',
  },
  {
    id: 'spatial-exhibition',
    title: '展陈重塑：走入幕布',
    phase: '媒介更新',
    description: '打破“人在台下看”的单一视角，借助错层白纱、光影矩阵与悬挂装置，让观众直接走进放大的皮影内部。',
    kind: 'performance',
  },
  {
    id: 'interactive-media',
    title: '交互演变：触印光影',
    phase: '媒介更新',
    description: '采用多通道投影与捕捉技术，用手势控制数字影人。屏幕成为新幕布，传统操纵杆化身为交互算法。',
    kind: 'history',
  },
  {
    id: 'contemporary-script',
    title: '文本对话：当代语境',
    phase: '表演更新',
    description: '不再局限于帝王将相、才子佳人。用古老的光影载体探讨现代人的城市聚散与身份认同，让老手艺发新声。',
    kind: 'performance',
  },
]

export const rebornCharacters: CharacterCard[] = [
  {
    id: 'modern-minimal-sheng',
    name: '无相武将',
    roleType: '武生',
    temperament: '极简、线条感、褪去重彩',
    featuredIn: ['《影·无界》数字展'],
    originStyle: '参数化生成',
    description: '保留武将最核心的动势轮廓线，去掉面部特征与衣着色彩，在纯白背景下呈现极致纯粹的几何张力。',
    tags: ['视觉提纯', '白描', '当代艺术'],
  },
  {
    id: 'acrylic-dan',
    name: '流光青衣',
    roleType: '旦角',
    temperament: '通透、折射、介质实验',
    featuredIn: ['《镜花水月》实验剧'],
    originStyle: '新材料工艺',
    description: '放弃传统牛皮，采用彩色透光新材料切割。光束穿透时不仅产生影，更带来水波般的色彩折射与光晕。',
    tags: ['材料替换', '光学折射', '波光感'],
  },
  {
    id: 'kinetic-jing',
    name: '矩阵巨灵',
    roleType: '净角',
    temperament: '压迫、机械感、巨物',
    featuredIn: ['公共空间展陈'],
    originStyle: '结构解构',
    description: '将其原本厚重的面部放大至三米，由多层透光板解构重组，重新展现非遗元素的“压场”重量感。',
    tags: ['空间雕塑', '巨物感', '建筑感'],
  },
]

export const rebornPlays: PlayCard[] = [
  {
    id: 'reborn-play-1',
    title: '《皮影·无界》空间大展',
    sceneHook: '不再是一块小小的窗，而是包围你的整片流光森林。',
    summary: '一场将皮影元素彻底解构的沉浸式展览。光斑、镂空影纹与环境布景交织，以当代策展语言重新释放传统生命力。',
    relatedCharacters: ['无相武将', '矩阵巨灵'],
    stageMood: '沉浸、前卫、空间感',
    tags: ['空间展陈', '数字视觉'],
  },
  {
    id: 'reborn-play-2',
    title: '实验剧《镜花水月》',
    sceneHook: '水中的倒影与幕布上的留白，谁比谁更真实？',
    summary: '结合新媒材影偶与现代舞者的交互实验场。讲述东方语境下的缥缈旧梦，将非遗技法融入当代剧场审美的尝试。',
    relatedCharacters: ['流光青衣'],
    stageMood: '诗意、空灵、流动',
    tags: ['新材料', '现代舞台', '跨界融合'],
  },
]

export const rebornTracks: RebornTrack[] = [
  {
    id: 'reborn-distribution',
    title: '传播方式更新',
    summary: '从乡间戏台到展馆、短片、品牌视觉与公共空间，皮影不再只靠一场完整演出来被看见。',
    presentTense: '今天的入口更碎片，也更容易先以一个画面、一个装置、一次展陈被记住。',
    retainedCore: '真正被保留下来的，仍是剪影、透光与人物轮廓的辨识度。',
  },
  {
    id: 'reborn-performance',
    title: '表演更新',
    summary: '操演逻辑开始和现代剧场、舞蹈、多媒体装置并置，演出不再只有“幕后操杆”的单一关系。',
    presentTense: '新作品更强调观众参与、空间关系与现场氛围，而不只复刻传统程式。',
    retainedCore: '影偶一旦遇光而动，人物由节奏被读出来的核心机制并没有改变。',
  },
  {
    id: 'reborn-visual',
    title: '视觉再设计更新',
    summary: '设计师会把皮影的边缘、镂空、关节与装饰纹样抽离出来，转成更克制、更适合当代媒介的视觉语言。',
    presentTense: '更新重点不是加更多元素，而是提纯视觉基因，让传统形态在新介质里继续成立。',
    retainedCore: '观众依旧能一眼认出那是皮影，而不是被彻底替换掉的陌生图形。',
  },
]
