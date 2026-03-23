import type { CSSProperties } from 'react'

import { SectionIntro } from '../shared/SectionIntro'

type Project = {
  title: string
  category: string
  summary: string
  stack: string[]
  metrics: string[]
  repoHref: string
}

type ProjectsSectionProps = {
  projects: Project[]
}

const projectPalettes = [
  {
    accent: '#78ffab',
    accentSoft: 'rgba(120, 255, 171, 0.18)',
    panel: 'linear-gradient(135deg, rgba(14, 36, 23, 0.96), rgba(7, 13, 10, 0.98))',
  },
  {
    accent: '#4ade80',
    accentSoft: 'rgba(74, 222, 128, 0.18)',
    panel: 'linear-gradient(135deg, rgba(12, 33, 21, 0.96), rgba(8, 14, 11, 0.98))',
  },
  {
    accent: '#2dd4bf',
    accentSoft: 'rgba(45, 212, 191, 0.16)',
    panel: 'linear-gradient(135deg, rgba(10, 28, 26, 0.96), rgba(6, 12, 12, 0.98))',
  },
  {
    accent: '#a3e635',
    accentSoft: 'rgba(163, 230, 53, 0.16)',
    panel: 'linear-gradient(135deg, rgba(24, 33, 12, 0.96), rgba(9, 12, 7, 0.98))',
  },
]

function ProjectCard({
  project,
  index,
}: {
  project: Project
  index: number
}) {
  const palette = projectPalettes[index % projectPalettes.length]
  const cardStyle = {
    '--project-accent': palette.accent,
    '--project-accent-soft': palette.accentSoft,
  } as CSSProperties

  return (
    <article className="project-card" style={cardStyle}>
      <div className="project-card__visual">
        <div className="project-card__frame">
          <div className="project-card__eyebrow">
            <span>Selected Work</span>
            <span>{project.category}</span>
          </div>

          <div className="project-card__screen">
            <div className="project-card__screen-top">
              <div className="project-card__status" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="project-card__signal">Project Signal</span>
            </div>

            <h3 className="project-card__title">{project.title}</h3>

            <div className="project-card__wave" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="project-card__mini-grid" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>

          <div className="project-card__vinyl" aria-hidden="true" />
        </div>
      </div>

      <div className="project-card__body">
        <div>
          <p className="text-xs font-medium tracking-[0.24em] text-[color:var(--color-text-muted)] uppercase">
            {project.category}
          </p>
          <h3 className="mt-4 break-words text-2xl leading-tight font-semibold tracking-[-0.05em] text-[color:var(--color-text)]">
            {project.title}
          </h3>
          <p className="mt-4 text-sm leading-7 text-[color:var(--color-text-soft)]">
            {project.summary}
          </p>
        </div>

        <div className="mt-7 grid gap-3">
          {project.metrics.map((metric) => (
            <div key={metric} className="project-card__metric">
              <span className="project-card__metric-dot" aria-hidden="true" />
              <span>{metric}</span>
            </div>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <span key={item} className="tag-pill tag-pill--soft">
              {item}
            </span>
          ))}
        </div>

        <a href={project.repoHref} className="project-card__action">
          Access Project
        </a>
      </div>
    </article>
  )
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" data-reveal-group className="section-shell">
      <div className="reveal-item">
        <SectionIntro
          eyebrow="Projects"
          title="A curated set of systems built for operation, scale and user flow."
          description="This section now leans into a cleaner studio-system aesthetic: each card feels like a project signal board, mixing interface structure, music-inspired motion and readable product detail without fragile 3D behavior."
        />
      </div>

      <div className="mt-14 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <div key={project.title} className="reveal-item">
            <ProjectCard project={project} index={index} />
          </div>
        ))}
      </div>
    </section>
  )
}
