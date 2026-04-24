import type { CharacterCard, PlayCard } from '../../../types/shadow-puppetry'

type StageMomentSectionProps = {
  activeCharacter: CharacterCard
  plays: PlayCard[]
}

export function StageMomentSection({
  activeCharacter,
  plays,
}: StageMomentSectionProps) {
  const featured = plays.filter((play) =>
    play.relatedCharacters.includes(activeCharacter.name),
  )

  const orderedPlays = [...featured, ...plays.filter((play) => !featured.includes(play))]

  return (
    <section className="stage-panel p-6 sm:p-8 lg:p-10">
      <header className="mb-6 grid gap-4 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.36em] text-[var(--stage-muted)]">剧目瞬间</p>
          <h2 className="font-display text-3xl text-[var(--stage-paper)] sm:text-4xl">角色一换，幕上的感觉也变了</h2>
        </div>
        <p className="text-sm leading-7 text-[var(--stage-ink-soft)]">
          当前上场角色：<span className="text-[var(--stage-paper)]">{activeCharacter.name}</span>。先看最能抓住人的一秒，再看它和剧目的关系。
        </p>
      </header>

      <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
        {orderedPlays[0] ? (
          <article className="rounded-[1.6rem] border border-[rgba(240,197,112,0.25)] bg-[linear-gradient(150deg,rgba(255,199,116,0.16),rgba(14,10,10,0.9)_45%)] p-6">
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--stage-muted)]">主画面</p>
            <h3 className="mt-3 font-display text-4xl text-[var(--stage-paper)]">{orderedPlays[0].title}</h3>
            <p className="mt-4 text-lg leading-8 text-[var(--stage-paper)]/90">{orderedPlays[0].sceneHook}</p>
            <p className="mt-4 text-sm leading-7 text-[var(--stage-ink-soft)]">{orderedPlays[0].summary}</p>
          </article>
        ) : null}

        <div className="space-y-4">
          {orderedPlays.slice(1).map((play) => (
            <article
              key={play.id}
              className="rounded-3xl border border-white/10 bg-[rgba(11,8,8,0.6)] p-5"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--stage-muted)]">{play.stageMood}</p>
              <h3 className="mt-2 font-display text-2xl text-[var(--stage-paper)]">{play.title}</h3>
              <p className="mt-2 text-sm leading-7 text-[var(--stage-ink-soft)]">{play.sceneHook}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
