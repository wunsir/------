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
    id: 'hide-softening',
    title: '制皮起底：回软与刮薄',
    phase: '材料',
    description:
      '选用牛皮后先浸泡回软，再反复刮薄与晾平。厚薄差控制在同一张皮内，是后续透光均匀的前提。',
    kind: 'process',
  },
  {
    id: 'pattern-carving',
    title: '雕刻起纹：推刀与扎孔',
    phase: '雕刻',
    description:
      '用平刀、斜刀与月牙刀完成边线和纹孔。纹孔密度不仅决定图案精细度，也决定幕前亮部层次。',
    kind: 'process',
  },
  {
    id: 'color-binding',
    title: '敷彩定色：矿物彩与鱼鳔胶',
    phase: '上色',
    description:
      '矿物颜料以鱼鳔胶调和后薄敷，多次罩染而不一次压厚，保证色相饱和同时保留透光。',
    kind: 'process',
  },
  {
    id: 'joint-rigging',
    title: '组装成身：活扣关节与操纵杆',
    phase: '组装',
    description:
      '以线扣连接头、肩、肘、腕等关节，再安装头杆与手杆。关节松紧和杆位角度直接决定动作可控范围。',
    kind: 'process',
  },
  {
    id: 'light-check',
    title: '试灯校影：边缘与亮度分区',
    phase: '校影',
    description:
      '上幕前以暖灯试照，检查影缘是否发糊、纹孔是否堵光，并按部位微调厚薄与关节阻尼。',
    kind: 'process',
  },
  {
    id: 'stage-run',
    title: '幕前走身：起手、回身、亮相',
    phase: '表演',
    description:
      '进入演出后，操杆先做起手再转身，利用关节传动把人物节奏传到幕前，形成可读的身段。',
    kind: 'performance',
  },
]

export const craftCharacters: CharacterCard[] = [
  {
    id: 'craft-dan',
    name: '华县旦角纹样样本',
    roleType: '旦角',
    temperament: '细纹密、色层薄、透光层次清楚',
    featuredIn: ['打金枝', '白蛇传'],
    originStyle: '陕西华县皮影工艺样本',
    description:
      '头饰与袖边以密纹刀路和小孔透光见长，重点不在夸张造型，而在幕前光下还能保持层次与边缘清晰。',
    tags: ['雪花纹', '月牙刀', '薄敷重彩'],
  },
  {
    id: 'craft-jing',
    name: '唐山净角重彩样本',
    roleType: '净角',
    temperament: '线条厚实、色块明确、轮廓压场',
    featuredIn: ['钟馗嫁妹', '铡美案'],
    originStyle: '河北唐山皮影工艺样本',
    description:
      '净角面部用更稳的主线和更明确的色块分区处理，既保留戏曲角色识别，也避免透光后出现脏色混叠。',
    tags: ['平刀起线', '矿物彩', '边缘清晰'],
  },
  {
    id: 'craft-sheng',
    name: '冀东武生关节样本',
    roleType: '武生',
    temperament: '杆路明确、关节灵活、动作干净',
    featuredIn: ['长坂坡', '挑滑车'],
    originStyle: '冀东皮影操演样本',
    description:
      '武生常在肩、肘、腕之外增加兵器挂点，配合双杆控制，确保幕前快节奏动作仍能保持方向与节奏清楚。',
    tags: ['活扣结构', '双杆控制', '武戏身段'],
  },
]

export const craftPlays: PlayCard[] = [
  {
    id: 'craft-play-1',
    title: '工坊实录：牛皮刮制与晾皮',
    sceneHook: '同一张皮要先回软再刮薄，才经得住后续刀路与上灯。',
    summary:
      '记录材料段最关键的两步：厚薄分区与透光测试。不是为“做旧”，而是为幕前影缘清晰度打底。',
    relatedCharacters: ['华县旦角纹样样本'],
    stageMood: '克制、安静、手作',
    tags: ['材料', '刮薄', '透光校验'],
  },
  {
    id: 'craft-play-2',
    title: '幕后实录：关节定位与试灯',
    sceneHook: '先定活扣，再上杆，最后试灯，动作和光感才会一起成立。',
    summary:
      '把关节松紧、杆位角度与试灯校影放在同一流程处理，确保抬手、回身、亮相不会散架。',
    relatedCharacters: ['冀东武生关节样本'],
    stageMood: '紧凑、稳定、可控',
    tags: ['关节', '操纵杆', '试灯'],
  },
]

export const craftLayers: CraftLayer[] = [
  {
    id: 'material-layer',
    title: '牛皮回软与刮薄',
    phase: '材料',
    detail:
      '材料段先做回软、去脂与刮薄，按头面、躯干、衣摆分区控制厚薄，避免一体化处理导致透光失衡。',
    craftFocus: '把皮料调整到既能稳定吃刀，也能在暖灯下保持明暗分区。',
    stageEffect: '幕前影缘更干净，人物轮廓不会因局部过厚而发闷。',
  },
  {
    id: 'carving-layer',
    title: '刀路与纹孔分区',
    phase: '雕刻',
    detail:
      '边线、衣褶、纹孔使用不同刀路。纹孔不只承担装饰，还承担光通道作用，直接影响幕前亮部细节。',
    craftFocus: '让纹样在近看可辨，在透光时仍能保留层次，而不是只剩一片亮斑。',
    stageEffect: '角色转身时，衣纹和袖口层级可读，不会塌成平面黑影。',
  },
  {
    id: 'color-layer',
    title: '鱼鳔胶与矿物彩',
    phase: '上色',
    detail:
      '矿物颜料以鱼鳔胶调和，采用多层薄敷而非一次厚涂。色层先求稳定附着，再求透光后的色相完整。',
    craftFocus: '兼顾红、绿、赭等戏曲色的饱和度与透光度，避免色层堵光。',
    stageEffect: '灯下能看到彩影层次，而不是只有单色暗块。',
  },
  {
    id: 'assembly-layer',
    title: '活扣关节与操纵杆',
    phase: '组装',
    detail:
      '组装阶段先确定活扣位置，再校正头杆与手杆角度。关节阻尼和杆路配合决定角色动作是否连贯。',
    craftFocus: '让头、臂、腰与兵器连接点形成稳定传动，保证快慢动作都可控。',
    stageEffect: '幕前抬手、回身、亮相更干净，动作不会拖泥带水。',
  },
]
