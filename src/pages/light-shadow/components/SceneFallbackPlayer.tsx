type SceneFallbackPlayerProps = {
  active: boolean
}

export function SceneFallbackPlayer({ active }: SceneFallbackPlayerProps) {
  return (
    <div
      className={[
        'pointer-events-none absolute bottom-4 left-4 rounded-2xl border px-3 py-2 text-xs transition',
        active
          ? 'border-[rgba(240,197,112,0.32)] bg-[rgba(10,8,8,0.62)] text-[var(--stage-paper)]'
          : 'border-white/12 bg-[rgba(10,8,8,0.35)] text-[var(--stage-ink-soft)]',
      ].join(' ')}
      data-active={active ? 'true' : 'false'}
      data-testid="scene-fallback-player"
    >
      <p className="uppercase tracking-[0.2em]">{active ? '自动演示中' : '手势接管中'}</p>
      <p className="mt-1 text-[11px] text-[var(--stage-muted)]">
        灯位变化会同步推动影子、轮廓和舞台前后关系。
      </p>
    </div>
  )
}
