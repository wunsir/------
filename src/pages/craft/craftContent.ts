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
    title: '制皮：回软、刮薄、晾平',
    phase: '材料',
    description:
      '牛皮先浸泡回软，再反复刮薄、晾平。同一张皮的厚薄要控制住，灯照上去才不会一块亮、一块暗。',
    kind: 'process',
  },
  {
    id: 'pattern-carving',
    title: '雕刻：走刀与打孔',
    phase: '雕刻',
    description:
      '平刀、斜刀和月牙刀分别处理边线、衣褶和纹孔。孔打得密不密，会直接影响幕上的亮部层次。',
    kind: 'process',
  },
  {
    id: 'color-binding',
    title: '上色：薄敷矿物彩',
    phase: '上色',
    description:
      '矿物颜料用鱼鳔胶调和后薄薄上色，多次罩染，不一次涂厚。这样颜色稳，也不容易挡住光。',
    kind: 'process',
  },
  {
    id: 'joint-rigging',
    title: '组装：活扣与操纵杆',
    phase: '组装',
    description:
      '头、肩、肘、腕用线扣连起来，再装上头杆和手杆。关节松紧和杆位角度，决定动作能不能顺手控制。',
    kind: 'process',
  },
  {
    id: 'light-check',
    title: '试灯：看边缘和亮度',
    phase: '校影',
    description:
      '上幕前要用灯试一遍：边缘会不会发糊，纹孔有没有堵光，关节动起来是不是太紧或太松。',
    kind: 'process',
  },
  {
    id: 'stage-run',
    title: '上幕：抬手、回身、亮相',
    phase: '表演',
    description:
      '到了演出，操杆要把抬手、回身、亮相连起来。观众看到的身段，其实来自台后的关节传动。',
    kind: 'performance',
  },
]

export const craftCharacters: CharacterCard[] = [
  {
    id: 'craft-dan',
    name: '华县旦角纹样',
    roleType: '旦角',
    temperament: '细纹密、色层薄，灯下层次清楚',
    featuredIn: ['打金枝', '白蛇传'],
    originStyle: '陕西华县皮影工艺样本',
    description:
      '头饰和袖边常用密纹刀路和细小透光孔。重点不是把造型做得夸张，而是让灯下的边缘和层次清楚。',
    tags: ['雪花纹', '月牙刀', '薄敷重彩'],
  },
  {
    id: 'craft-jing',
    name: '唐山净角重彩',
    roleType: '净角',
    temperament: '线条厚实、色块明确，轮廓有分量',
    featuredIn: ['钟馗嫁妹', '铡美案'],
    originStyle: '河北唐山皮影工艺样本',
    description:
      '净角面部要有稳定的主线和清楚的色块。这样既能保住戏曲角色的识别度，也能减少透光后的混色。',
    tags: ['平刀起线', '矿物彩', '边缘清晰'],
  },
  {
    id: 'craft-sheng',
    name: '冀东武生关节',
    roleType: '武生',
    temperament: '杆路明确、关节灵活，动作干净',
    featuredIn: ['长坂坡', '挑滑车'],
    originStyle: '冀东皮影操演样本',
    description:
      '武生除了肩、肘、腕，还会考虑兵器挂点。双杆配合得好，快动作也能看清方向和节奏。',
    tags: ['活扣结构', '双杆控制', '武戏身段'],
  },
]

export const craftPlays: PlayCard[] = [
  {
    id: 'craft-play-1',
    title: '工坊记录：牛皮刮制与晾皮',
    sceneHook: '同一张皮要先回软再刮薄，才经得住后续刀路与上灯。',
    summary:
      '制皮这一步最要紧的是厚薄分区和透光测试。它不是为了做出旧感，而是为了让幕上的边缘更清楚。',
    relatedCharacters: ['华县旦角纹样'],
    stageMood: '安静、手作',
    tags: ['材料', '刮薄', '透光校验'],
  },
  {
    id: 'craft-play-2',
    title: '台后记录：关节定位与试灯',
    sceneHook: '先定活扣，再上杆，最后试灯，动作和光感才对得上。',
    summary:
      '关节松紧、杆位角度和试灯要一起看。这样抬手、回身、亮相才不会散，灯下也不会糊。',
    relatedCharacters: ['冀东武生关节'],
    stageMood: '稳定、可控',
    tags: ['关节', '操纵杆', '试灯'],
  },
]

export const craftLayers: CraftLayer[] = [
  {
    id: 'material-layer',
    title: '牛皮回软与刮薄',
    phase: '材料',
    detail:
      '制皮时先做回软、去脂和刮薄，再按头面、躯干、衣摆控制厚薄，避免灯下一块透、一块闷。',
    craftFocus: '让皮料既能吃刀，也能在灯下保持比较稳定的明暗。',
    stageEffect: '幕上的边缘更干净，人物轮廓不会因为局部过厚而发闷。',
  },
  {
    id: 'carving-layer',
    title: '刀路与纹孔分区',
    phase: '雕刻',
    detail:
      '边线、衣褶、纹孔要用不同刀路。纹孔不只是装饰，也是让光透过去的通道。',
    craftFocus: '让纹样近看能辨认，透光后也能留下层次。',
    stageEffect: '角色转身时，衣纹和袖口还能看清，不会变成一块平黑影。',
  },
  {
    id: 'color-layer',
    title: '鱼鳔胶与矿物彩',
    phase: '上色',
    detail:
      '矿物颜料用鱼鳔胶调和，分层薄敷，不一次厚涂。色层要先附着稳定，再考虑灯下效果。',
    craftFocus: '让红、绿、赭等颜色够鲜明，同时不把光完全堵住。',
    stageEffect: '灯下能看见彩影层次，而不是一块单色暗影。',
  },
  {
    id: 'assembly-layer',
    title: '活扣关节与操纵杆',
    phase: '组装',
    detail:
      '组装时先确定活扣位置，再校正头杆和手杆角度。关节阻尼和杆路配合，会影响动作是否连贯。',
    craftFocus: '让头、臂、腰和兵器连接点能稳定传动，快慢动作都可控。',
    stageEffect: '幕前抬手、回身、亮相更利落，动作不容易拖散。',
  },
]
