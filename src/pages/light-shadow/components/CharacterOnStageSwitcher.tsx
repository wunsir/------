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
    <div className="rounded-2xl border border-white/10 bg-[rgba(10,8,8,0.44)] px-3 py-2.5 sm:px-4">
      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
        <p className="text-[10px] uppercase tracking-[0.28em] text-[var(--stage-muted)]">换角色</p>

        <div className="flex flex-1 flex-wrap gap-1.5">
          {roleOptions.map((option) => {
            const label = option.label

            return (
              <button
                key={option.value}
                className={[
                  'whitespace-nowrap rounded-full border px-2.5 py-1 text-xs transition',
                  selectedRole === option.value
                    ? 'border-[rgba(240,197,112,0.36)] bg-[rgba(240,197,112,0.1)] text-[var(--stage-paper)]'
                    : 'border-white/10 bg-[rgba(255,255,255,0.02)] text-[var(--stage-ink-soft)] hover:border-white/20 hover:text-[var(--stage-paper)]',
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

        <p
          aria-live="polite"
          className="text-[11px] text-[var(--stage-muted)]"
          data-testid="on-stage-announcer"
        >
          {activeCharacter.name}已上场
        </p>
      </div>
    </div>
  )
}
