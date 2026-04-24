export type ThemeSlug = 'home' | 'craft' | 'light-shadow' | 'reborn'

export type ThemeAccent = 'gold' | 'crimson' | 'amber' | 'paper'

export type HeroMode = 'curtain' | 'craft' | 'shadow' | 'modern'

export type ThemePath = '/' | '/craft' | '/light-shadow' | '/reborn'

export type ThemePageMeta = {
  slug: ThemeSlug
  title: string
  subtitle: string
  intro: string
  accent: ThemeAccent
  heroMode: HeroMode
}

export type ThemeRouteEntry = {
  path: ThemePath
  navLabel: string
  kicker: string
  meta: ThemePageMeta
  recommendedOrder?: 1 | 2 | 3
}

export type CharacterCard = {
  id: string
  name: string
  roleType: string
  temperament: string
  featuredIn: string[]
  originStyle: string
  description: string
  tags: string[]
}

export type PlayCard = {
  id: string
  title: string
  sceneHook: string
  summary: string
  relatedCharacters: string[]
  stageMood: string
  tags: string[]
}

export type TimelineStep = {
  id: string
  title: string
  phase: string
  description: string
  kind: 'process' | 'performance' | 'history'
}

export type CharacterRoleFilter = 'all' | '武生' | '旦角' | '净角' | '丑角'

export type LightShadowInputMode = 'mouse' | 'touch' | 'none'

export type LightShadowScenePhase =
  | 'opening'
  | 'interactive'
  | 'switching'
  | 'settle'
  | 'auto-demo'

export type LightPosition = {
  u: number
  v: number
}
