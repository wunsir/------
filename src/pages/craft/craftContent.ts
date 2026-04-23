import type { CharacterCard, PlayCard, TimelineStep } from '../../types/shadow-puppetry'

export type CraftLayer = {
  id: string
  title: string
  phase: '材料' | '雕刻' | '上色' | '组装'
  detail: string
  craftFocus: string
  stageEffect: string
}

export const craftTimeline: TimelineStep[] = [
  {
    id: 'select-skin',
    title: '制皮：透光的底骨',
    phase: '材料',
    description: '挑选最强韧的牛皮，刮薄、碾平，只留一线光能生动穿透的醇净。这是后续所有刀口与生命的上限。',
    kind: 'process',
  },
  {
    id: 'carving',
    title: '镂刻：刀向寻光',
    phase: '雕刻',
    description: '以刀代笔，刻下细密的雪花纹与水路。刀口既形成视觉图案，更为光束穿越幕前留出呼吸的节奏。',
    kind: 'process',
  },
  {
    id: 'coloring',
    title: '敷彩：染就戏梦',
    phase: '上色',
    description: '用自调的矿物重彩走线，红绿撞色。当强光穿透这层薄色，影人便在黑暗的幕布上爆发出浓烈的张力。',
    kind: 'process',
  },
  {
    id: 'assembly',
    title: '缀结：骨骼赋形',
    phase: '组装',
    description: '以线穿锁，点定四肢关节。这不只连接结构，更是为了表演空间的延展，安上操纵杆的那一刻，便有了魂。',
    kind: 'process',
  },
  {
    id: 'performance',
    title: '登场：光下重生',
    phase: '表演',
    description: '随着急促的鼓板响起，木杆被猛然推至纸幕贴合。一束暖光打下，原本静默的皮料瞬间成了活生生的将领。',
    kind: 'performance',
  },
  {
    id: 'curtain-fall',
    title: '退场：影逝于暗',
    phase: '落幕',
    description: '灯源移开，光影瞬间散去。戏落幕时，喧嚣归零，它们再次隐入黑暗，变回皮箱里沉睡的剪影。',
    kind: 'performance',
  },
]

export const craftCharacters: CharacterCard[] = [
  {
    id: 'craft-dan',
    name: '精雕青衣',
    roleType: '旦角',
    temperament: '工巧、繁密、极致透光',
    featuredIn: ['打金枝', '白蛇传'],
    originStyle: '陕西东路皮影',
    description: '头面与裙摆上的镂空是雕刻极限的展示，只有足够细致的刀工，才能让其在光下显出层层涟漪。',
    tags: ['雪花镂', '水路', '精工'],
  },
  {
    id: 'craft-jing',
    name: '重彩黑脸',
    roleType: '净角',
    temperament: '粗犷、厚重、色彩浓烈',
    featuredIn: ['钟馗嫁妹', '铡美案'],
    originStyle: '华县皮影',
    description: '刻痕大刀阔斧，留白面积大以承载高饱和的红绿矿物颜料。光束穿过时，视觉压迫感极强。',
    tags: ['大凿', '重彩', '高饱和'],
  },
  {
    id: 'craft-sheng',
    name: '提线武将',
    roleType: '武生',
    temperament: '多轴、灵活、关节精密',
    featuredIn: ['长坂坡', '挑滑车'],
    originStyle: '冀东皮影',
    description: '除了常规关窍，武将往往有额外的手腕与兵器控制点。关节的组装逻辑直接决定了其在幕前的打斗流畅度。',
    tags: ['多关节', '暗线', '动态张力'],
  },
]

export const craftPlays: PlayCard[] = [
  {
    id: 'craft-play-1',
    title: '匠作录：刀与光的契约',
    sceneHook: '刻刀没入牛皮，刻出的是人物，透出的是生机。',
    summary: '这并非舞台上的一出戏，而是每一个影人走向光明前必须经历的暗中雕琢与技艺传承。',
    relatedCharacters: ['精雕青衣'],
    stageMood: '沉静、微光、厚重',
    tags: ['幕后', '手作', '刀工'],
  },
  {
    id: 'craft-play-2',
    title: '结骨录：牵丝引线',
    sceneHook: '十指翻飞间，死皮化作活骨。',
    summary: '拆解皮影最隐秘的连结工艺。一根老线，几个活扣，完成了从静物到演员的终极跃升。',
    relatedCharacters: ['提线武将'],
    stageMood: '紧凑、机巧、精密',
    tags: ['关窍', '组装', '牵杆'],
  },
]

export const craftLayers: CraftLayer[] = [
  {
    id: 'material-layer',
    title: '选皮取透',
    phase: '材料',
    detail: '工艺起点不是图案，而是先决定牛皮的韧性、薄度与透光均匀度。底材不稳，后面的精工都会失真。',
    craftFocus: '把皮料修到既能吃刀，又能让暖光穿过时不发浊。',
    stageEffect: '人物登场时，轮廓会先透得干净，边缘不糊。',
  },
  {
    id: 'carving-layer',
    title: '刀路起纹',
    phase: '雕刻',
    detail: '雕刻不是单纯做花纹，而是在厚薄之间控制呼吸。线有多细、孔有多密，决定了幕前能看到多少层次。',
    craftFocus: '让雪花纹、水路纹和衣褶纹在近看与透光时都成立。',
    stageEffect: '角色转身时，影纹会比平面图案更有流动感。',
  },
  {
    id: 'color-layer',
    title: '重彩入幕',
    phase: '上色',
    detail: '上色要和透光性一起考虑。矿物重彩压得太厚会闷，压得太轻又失去戏曲的浓度，关键在层层薄敷。',
    craftFocus: '保住红、绿、赭等高对比色，同时不堵住光线。',
    stageEffect: '灯一打下，人物先不是黑影，而是带着温度与戏味的彩影。',
  },
  {
    id: 'assembly-layer',
    title: '关节起势',
    phase: '组装',
    detail: '组装决定动作是否利落。活扣的位置、松紧与操纵杆角度，都在替角色预设“能如何动”。',
    craftFocus: '让头、臂、腰、兵器之间形成稳定又灵活的传动关系。',
    stageEffect: '一旦上台，角色抬手、回身、亮相时会带出真正的起承转合。',
  },
]
