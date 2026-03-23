import { SectionIntro } from '../shared/SectionIntro'

type AboutSectionProps = {
  copy: string[]
  credentials: Array<{ label: string; value: string; description: string }>
  highlights: Array<{ title: string; description: string }>
}

export function AboutSection({
  copy,
  credentials,
  highlights,
}: AboutSectionProps) {
  return (
    <section id="about" data-reveal-group className="section-shell">
      <div className="section-grid">
        <div className="reveal-item">
          <SectionIntro
            eyebrow="About"
            title="Architecture-first development with product reality in mind."
            description="My focus is not isolated features. I build complete systems that connect business rules, clean front-end flows and dependable APIs into one cohesive delivery."
          />
        </div>

        <div className="grid gap-6">
          <div className="content-panel reveal-item">
            {copy.map((paragraph) => (
              <p
                key={paragraph}
                className="text-base leading-8 text-[color:var(--color-text-soft)] sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid gap-4 lg:grid-cols-2">
            {credentials.map((item) => (
              <article key={item.label} className="credential-card reveal-item">
                <span className="text-xs font-semibold tracking-[0.28em] text-[color:var(--color-text-muted)] uppercase">
                  {item.label}
                </span>
                <h3 className="mt-4 text-2xl font-semibold tracking-[-0.05em] text-[color:var(--color-text)]">
                  {item.value}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[color:var(--color-text-soft)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {highlights.map((item) => (
              <article key={item.title} className="highlight-tile reveal-item">
                <p className="text-sm font-semibold tracking-[0.22em] text-[color:var(--color-text-muted)] uppercase">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--color-text-soft)]">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
