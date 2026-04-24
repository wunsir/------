import type { HomeOpeningMode } from './homeOpeningSceneState'

type HomeOpeningFallbackProps = {
  openingMode: HomeOpeningMode
}

export function HomeOpeningFallback({
  openingMode,
}: HomeOpeningFallbackProps) {
  if (openingMode === 'full' || openingMode === 'short') {
    return null
  }

  return (
    <div className="home-fallback-badge" aria-live="polite">
      {openingMode === 'static' ? '静态模式' : '轻量模式'}
    </div>
  )
}
