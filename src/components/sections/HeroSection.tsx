import heroPortrait from '../../assets/hero.png'

type HeroSectionProps = {
  roles: string[]
  stats: Array<{ label: string; value: string }>
  principles: string[]
}

export function HeroSection({ roles, stats, principles }: HeroSectionProps) {
  return (
    <section
      id="home"
      data-reveal-group
      className="relative overflow-hidden px-6 pb-20 pt-16 sm:pt-20 lg:px-10 lg:pb-28"
    >
      <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(320px,0.95fr)] lg:items-center">
        <div className="relative z-10 max-w-3xl">
          <span className="section-eyebrow reveal-item">Pedro Menzinger</span>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-[-0.075em] text-[color:var(--color-text)] sm:text-6xl lg:text-7xl">
            Full Stack Engineer building products with rhythm, structure and production focus.
          </h1>
          <p className="reveal-item mt-6 max-w-2xl text-lg leading-8 text-[color:var(--color-text-soft)] sm:text-xl">
            I design and ship end-to-end systems across interface, API and deployment,
            turning complex flows into maintainable products that can scale with confidence.
          </p>

          <div className="reveal-item mt-10 flex flex-wrap items-center gap-4">
            <a href="#projects" className="primary-button">
              Explore Projects
            </a>
            <a href="#contact" className="secondary-button">
              Contact Me
            </a>
          </div>

          <div className="reveal-item mt-10 flex flex-wrap gap-3">
            {roles.map((role) => (
              <span key={role} className="tag-pill">
                {role}
              </span>
            ))}
          </div>

          <div className="reveal-item mt-12 grid gap-5 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="info-chip">
                <span className="text-3xl font-semibold tracking-[-0.06em] text-[color:var(--color-text)]">
                  {stat.value}
                </span>
                <span className="mt-2 text-xs font-medium tracking-[0.24em] text-[color:var(--color-text-muted)] uppercase">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal-item relative">
          <div className="hero-visual">
            <div className="hero-visual__halo" />
            <div className="hero-visual__sigil" aria-hidden="true" />
            <div className="hero-visual__scanlines" aria-hidden="true" />
            <div className="hero-visual__constellation" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="hero-visual__portrait">
              <img
                src={heroPortrait}
                alt="Pedro Menzinger portrait"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="hero-visual__card hero-visual__card--status">
              <span className="text-xs font-medium tracking-[0.26em] text-[color:var(--color-text-muted)] uppercase">
                Now playing
              </span>
              <div className="mt-4 flex items-center gap-4">
                <div className="equalizer" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
                <div>
                  <p className="text-sm font-semibold text-[color:var(--color-text)]">
                    Full stack delivery
                  </p>
                  <p className="mt-1 text-sm text-[color:var(--color-text-soft)]">
                    React, Node.js, TypeScript and product-focused implementation.
                  </p>
                </div>
              </div>
            </div>

            <div className="hero-visual__card hero-visual__card--notes">
              <span className="text-xs font-medium tracking-[0.26em] text-[color:var(--color-text-muted)] uppercase">
                Engineering mindset
              </span>
              <ul className="mt-4 space-y-3">
                {principles.map((principle) => (
                  <li
                    key={principle}
                    className="flex items-center gap-3 text-sm text-[color:var(--color-text-soft)]"
                  >
                    <span className="h-2.5 w-2.5 rounded-full bg-[color:var(--color-accent)] shadow-[0_0_18px_var(--color-accent-glow)]" />
                    <span>{principle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
