import type {
  CharacterCard,
  LightPosition,
  CharacterRoleFilter,
  PlayCard,
  TimelineStep,
} from '../../types/shadow-puppetry'

export const characterRoleFilters: Array<{
  label: string
  value: CharacterRoleFilter
}> = [
  { label: '全部', value: 'all' },
  { label: '武生', value: '武生' },
  { label: '旦角', value: '旦角' },
  { label: '净角', value: '净角' },
  { label: '丑角', value: '丑角' },
]

export const characterCards: CharacterCard[] = [
  {
    id: 'mu-guiying',
    name: '穆桂英',
    roleType: '旦角',
    temperament: '凌厉、挺拔、带将门气',
    featuredIn: ['穆桂英挂帅'],
    originStyle: '陕西东路影偶',
    description: '逆光下，旦角的衣褶和旗靠更清楚。先扫出轮廓，气势就起来了。',
    tags: ['挂帅', '亮相', '旗靠'],
  },
  {
    id: 'sun-wukong',
    name: '孙悟空',
    roleType: '武生',
    temperament: '腾挪、跳脱，动作快、带风',
    featuredIn: ['大闹天宫'],
    originStyle: '河北唐山影戏',
    description: '武生适合快速摆动和翻身。影子一动，节奏马上热起来。',
    tags: ['翻打', '棍势', '腾挪'],
  },
  {
    id: 'zhong-kui',
    name: '钟馗',
    roleType: '净角',
    temperament: '压场、威严、面相强烈',
    featuredIn: ['钟馗嫁妹'],
    originStyle: '华县皮影',
    description: '净角不靠碎动作。脸谱和胡须的影形一出来，幕面就稳住了。',
    tags: ['镇场', '胡须', '脸谱'],
  },
  {
    id: 'zhao-yun',
    name: '赵云',
    roleType: '武生',
    temperament: '利落、挺枪、动作干净',
    featuredIn: ['长坂坡'],
    originStyle: '四川阆中皮影',
    description: '长兵器能把影线拉长。人物一转身，幕面就有了方向。',
    tags: ['枪势', '冲阵', '亮相'],
  },
  {
    id: 'bai-suzhen',
    name: '白素贞',
    roleType: '旦角',
    temperament: '柔韧、克制，动作流畅',
    featuredIn: ['白蛇传'],
    originStyle: '湖北云梦皮影',
    description: '水袖和发饰在逆光里层次明显，慢动作更能带出人物情绪。',
    tags: ['水袖', '回身', '流动'],
  },
  {
    id: 'zhu-bajie',
    name: '猪八戒',
    roleType: '丑角',
    temperament: '松弛、滑稽、带一点笨拙可爱',
    featuredIn: ['高老庄'],
    originStyle: '陇东皮影',
    description: '丑角适合小幅摆动和停顿。轻轻一晃，性格就出来了。',
    tags: ['喜感', '停顿', '抖肩'],
  },
]

export const playCards: PlayCard[] = [
  {
    id: 'mu-guiying-gua-shuai',
    title: '穆桂英挂帅',
    sceneHook: '旗影铺上纸幕，人物还没开口，气势先到了。',
    summary: '从台前披挂剪影到台后提杆力度，都是为了让“挂帅”这一刻站得住。',
    relatedCharacters: ['穆桂英'],
    stageMood: '昂扬、有力量、利落',
    tags: ['旦角', '军阵'],
  },
  {
    id: 'zhong-kui-jia-mei',
    title: '钟馗嫁妹',
    sceneHook: '脸谱一亮，人物还没开口，场面先沉下来。',
    summary: '净角靠轮廓压场，一个停顿就能让幕面有重量。',
    relatedCharacters: ['钟馗'],
    stageMood: '庄重、压场、浓墨',
    tags: ['净角', '镇场'],
  },
  {
    id: 'da-nao-tian-gong',
    title: '大闹天宫',
    sceneHook: '棍影掠过幕面，观众先感觉到速度，再认出人物。',
    summary: '武生场景重在节奏，影子、光束和操杆方向要一起发力。',
    relatedCharacters: ['孙悟空'],
    stageMood: '跳跃、炽烈、带风',
    tags: ['武生', '翻打'],
  },
]

export const performanceTimeline: TimelineStep[] = [
  {
    id: 'lamp-up',
    title: '灯先亮',
    phase: '开场前',
    description: '台前先看见一圈光，人物还没上场，观众已经进了戏。',
    kind: 'performance',
  },
  {
    id: 'shadow-enters',
    title: '影子出现',
    phase: '亮相',
    description: '人物从侧边切入幕布，先给轮廓，再接动作，身份靠影形被认出来。',
    kind: 'performance',
  },
  {
    id: 'gesture-builds',
    title: '杆带动作',
    phase: '戏正开',
    description: '提杆、翻腕、停顿跟唱念节奏接上，人物性格就从动作里出来。',
    kind: 'performance',
  },
  {
    id: 'lamp-fades',
    title: '灯慢落',
    phase: '落幕',
    description: '光先收，影后退，最后几秒暗下去，戏才算落住。',
    kind: 'performance',
  },
]

export const backstageMechanics = [
  {
    id: 'rod-tension',
    title: '提杆用力',
    description: '主杆决定动作的起势。灯位一变，手上的节奏也要跟着调。',
  },
  {
    id: 'wrist-pause',
    title: '翻腕停住',
    description: '很多时候，停顿比大动作更有分量。灯在中位停住，人物就能站稳。',
  },
  {
    id: 'back-light-sync',
    title: '台后配合',
    description: '台后不是一个人在动，操杆和灯光要合拍，台前关系才清楚。',
  },
] as const

export const fallbackLampPath: LightPosition[] = [
  { u: 0.22, v: 0.44 },
  { u: 0.5, v: 0.34 },
  { u: 0.78, v: 0.44 },
  { u: 0.5, v: 0.36 },
]
