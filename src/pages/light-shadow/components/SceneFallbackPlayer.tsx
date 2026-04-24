type SceneFallbackPlayerProps = {
  active: boolean
}

export function SceneFallbackPlayer({ active }: SceneFallbackPlayerProps) {
  return (
    <div
      className={[
        'pointer-events-none absolute bottom-3 left-3 rounded-full border px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] transition sm:bottom-4 sm:left-4 sm:px-3',
        active
          ? 'border-[rgba(240,197,112,0.32)] bg-[rgba(10,8,8,0.62)] text-[var(--stage-paper)]'
          : 'border-white/12 bg-[rgba(10,8,8,0.35)] text-[var(--stage-ink-soft)]',
      ].join(' ')}
      data-active={active ? 'true' : 'false'}
      data-testid="scene-fallback-player"
    >
      <span className="sm:hidden">灯位一偏，影势随之改变</span>
      <span className="hidden sm:inline">
        {active ? '自动中' : '接管中'} 灯位一偏，影势随之改变
      </span>
    </div>
  )
}
