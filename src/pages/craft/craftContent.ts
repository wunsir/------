import type { CharacterCard, PlayCard, TimelineStep } from '../../types/shadow-puppetry'

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
    featuredIn: ['打金枝'],
    originStyle: '陕西皮影',
    description: '头面与裙摆上的镂空是雕刻极限的展示，只有足够细致的刀工，才能让其在光下显出层层涟漪。',
    tags: ['雪花镂', '敷彩', '精工'],
  },
]

export const craftPlays: PlayCard[] = [
  {
    id: 'craft-play',
    title: '匠作录：刀与光的契约',
    sceneHook: '刻刀没入牛皮，刻出的是人物，透出的是生机。',
    summary: '这并非舞台上的一出戏，而是每一个影人走向光明前必须经历的暗中雕琢。',
    relatedCharacters: ['精雕青衣'],
    stageMood: '沉静、微光、厚重',
    tags: ['幕后', '手作'],
  },
]
