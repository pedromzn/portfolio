type SectionIntroProps = {
  eyebrow: string
  title: string
  description: string
  align?: 'left' | 'center'
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = 'left',
}: SectionIntroProps) {
  const alignmentClass =
    align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-2xl'

  return (
    <div className={alignmentClass}>
      <span className="section-eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-[color:var(--color-text)] sm:text-5xl">
        {title}
      </h2>
      <p className="mt-5 text-base leading-8 text-[color:var(--color-text-soft)] sm:text-lg">
        {description}
      </p>
    </div>
  )
}
