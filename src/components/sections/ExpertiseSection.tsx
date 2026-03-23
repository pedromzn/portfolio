import { SectionIntro } from '../shared/SectionIntro'

type ExpertiseSectionProps = {
  groups: Array<{
    title: string
    description: string
    items: string[]
  }>
}

export function ExpertiseSection({ groups }: ExpertiseSectionProps) {
  return (
    <section id="expertise" data-reveal-group className="section-shell">
      <div className="reveal-item">
        <SectionIntro
          eyebrow="Knowledge"
          title="The stack is modern, but the priority is always durability."
          description="I work mostly with TypeScript across front-end and back-end, building modular systems with clear boundaries, reliable contracts and real production readiness."
          align="center"
        />
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {groups.map((group, index) => (
          <article
            key={group.title}
            className="expertise-card reveal-item"
          >
            <div className="mb-8 flex items-center justify-between">
              <span className="text-sm font-semibold tracking-[0.22em] text-[color:var(--color-text-muted)] uppercase">
                {group.title}
              </span>
              <span className="text-sm text-[color:var(--color-accent)]">
                0{index + 1}
              </span>
            </div>

            <p className="text-base leading-8 text-[color:var(--color-text-soft)]">
              {group.description}
            </p>

            <ul className="mt-8 space-y-3">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm font-medium text-[color:var(--color-text)]"
                >
                  <span className="h-2 w-2 rounded-full bg-[color:var(--color-accent)]" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
