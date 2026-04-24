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
    description: '旦角在光下最见衣褶与旗靠层次，出场时更适合让灯影先扫出轮廓。',
    tags: ['挂帅', '亮相', '旗靠'],
  },
  {
    id: 'sun-wukong',
    name: '孙悟空',
    roleType: '武生',
    temperament: '腾挪、跳脱、带劲风感',
    featuredIn: ['大闹天宫'],
    originStyle: '河北唐山影戏',
    description: '武生更适合做快速摆动与翻身动作，影子一动就能把场子带热。',
    tags: ['翻打', '棍势', '腾挪'],
  },
  {
    id: 'zhong-kui',
    name: '钟馗',
    roleType: '净角',
    temperament: '压场、威严、面相强烈',
    featuredIn: ['钟馗嫁妹'],
    originStyle: '华县皮影',
    description: '净角的重点不在细碎动作，而在一上场就让脸谱和胡须影形压住全幕。',
    tags: ['镇场', '胡须', '脸谱'],
  },
  {
    id: 'zhao-yun',
    name: '赵云',
    roleType: '武生',
    temperament: '利落、挺枪、动作干净',
    featuredIn: ['长坂坡'],
    originStyle: '四川阆中皮影',
    description: '武生型角色适合用长兵器带出影线延展，人物一转身，整块幕布都会跟着起势。',
    tags: ['枪势', '冲阵', '亮相'],
  },
  {
    id: 'bai-suzhen',
    name: '白素贞',
    roleType: '旦角',
    temperament: '柔韧、克制、带流动感',
    featuredIn: ['白蛇传'],
    originStyle: '湖北云梦皮影',
    description: '旦角的水袖和发饰在逆光里更见层次，适合用缓动作把人物情绪慢慢推出去。',
    tags: ['水袖', '回身', '流动'],
  },
  {
    id: 'zhu-bajie',
    name: '猪八戒',
    roleType: '丑角',
    temperament: '松弛、滑稽、带一点笨拙可爱',
    featuredIn: ['高老庄'],
    originStyle: '陇东皮影',
    description: '丑角最适合拿来做互动彩蛋，小幅摆动和停顿就能把人物性格立住。',
    tags: ['喜感', '停顿', '抖肩'],
  },
]

export const playCards: PlayCard[] = [
  {
    id: 'mu-guiying-gua-shuai',
    title: '穆桂英挂帅',
    sceneHook: '旗影铺满纸幕，人物还未说话，气势已经先到。',
    summary: '从台前的披挂剪影到台后的提杆力度，都是为了让“挂帅”这一下立得住。',
    relatedCharacters: ['穆桂英'],
    stageMood: '昂扬、金石感、利落',
    tags: ['旦角', '军阵'],
  },
  {
    id: 'zhong-kui-jia-mei',
    title: '钟馗嫁妹',
    sceneHook: '脸谱一亮，相未开口，场子先沉下来。',
    summary: '净角的光影魅力在于压场，一次定格就能让幕布中心出现重量。',
    relatedCharacters: ['钟馗'],
    stageMood: '庄重、压场、浓墨',
    tags: ['净角', '镇场'],
  },
  {
    id: 'da-nao-tian-gong',
    title: '大闹天宫',
    sceneHook: '棍影掠过幕面，观众会先看到速度，再意识到人物是谁。',
    summary: '武生场景更强调节奏，影子、光束和操杆方向要一起形成爆发感。',
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
    description: '台前先看到光晕漫出来，人物还没入场，观众就已经进入戏台状态。',
    kind: 'performance',
  },
  {
    id: 'shadow-enters',
    title: '影才现',
    phase: '亮相',
    description: '人物从侧面切入幕布，先给轮廓，再补动作，角色身份由影形决定。',
    kind: 'performance',
  },
  {
    id: 'gesture-builds',
    title: '杆带动作',
    phase: '戏正开',
    description: '提杆、翻腕、停顿与语气同步，影偶的性格通过节奏被观众读出来。',
    kind: 'performance',
  },
  {
    id: 'lamp-fades',
    title: '灯慢落',
    phase: '落幕',
    description: '光先收，影后退，一场戏的余韵其实靠最后几秒的暗下去完成。',
    kind: 'performance',
  },
]

export const backstageMechanics = [
  {
    id: 'rod-tension',
    title: '提杆发力',
    description: '主杆力度决定动作起势，灯位偏移时，提杆节奏要跟着改，影才不会飘。',
  },
  {
    id: 'wrist-pause',
    title: '翻腕停顿',
    description: '一场戏最有重量的是停顿，灯在中位时停，人物会更像“立住”，而不是“掠过”。',
  },
  {
    id: 'back-light-sync',
    title: '背后协同',
    description: '幕后并非单人动作，操杆与灯光要同拍推进，观众看到的前后关系才会成立。',
  },
] as const

export const fallbackLampPath: LightPosition[] = [
  { u: 0.22, v: 0.44 },
  { u: 0.5, v: 0.34 },
  { u: 0.78, v: 0.44 },
  { u: 0.5, v: 0.36 },
]
