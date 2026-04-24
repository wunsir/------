import type { CharacterCard, CharacterRoleFilter } from '../../../types/shadow-puppetry'

type CharacterOnStageSwitcherProps = {
  activeCharacter: CharacterCard
  roleOptions: Array<{
    label: string
    value: CharacterRoleFilter
  }>
  selectedRole: CharacterRoleFilter
  onSelectRole: (role: CharacterRoleFilter) => void
}

export function CharacterOnStageSwitcher({
  activeCharacter,
  roleOptions,
  selectedRole,
  onSelectRole,
}: CharacterOnStageSwitcherProps) {
  return (
    <div className="space-y-4 rounded-3xl border border-white/12 bg-[rgba(11,8,8,0.58)] p-4">
      <header className="space-y-2">
        <p className="text-xs uppercase tracking-[0.35em] text-[var(--stage-muted)]">换人物上场</p>
        <p className="text-sm leading-6 text-[var(--stage-ink-soft)]">
          不做卡片筛选。角色换场后，主舞台灯位关系继续沿用，戏不打断。
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {roleOptions.map((option) => {
          const label = `${option.label}上场`

          return (
            <button
              key={option.value}
              className={[
                'rounded-full border px-3 py-2 text-sm transition',
                selectedRole === option.value
                  ? 'border-[rgba(240,197,112,0.36)] bg-[rgba(240,197,112,0.12)] text-[var(--stage-paper)]'
                  : 'border-white/10 bg-[rgba(255,255,255,0.03)] text-[var(--stage-ink-soft)] hover:border-white/20 hover:text-[var(--stage-paper)]',
              ].join(' ')}
              onClick={() => {
                onSelectRole(option.value)
              }}
              type="button"
            >
              {label}
            </button>
          )
        })}
      </div>

      <p aria-live="polite" className="text-xs text-[var(--stage-muted)]" data-testid="on-stage-announcer">
        {activeCharacter.name}上场
      </p>
    </div>
  )
}
