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
      {openingMode === 'static' ? '静态入场' : '轻量入场'}
    </div>
  )
}
