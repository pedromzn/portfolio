import { SectionIntro } from '../shared/SectionIntro'

type ContactSectionProps = {
  contacts: Array<{ label: string; value: string; href: string }>
}

export function ContactSection({ contacts }: ContactSectionProps) {
  return (
    <section id="contact" data-reveal-group className="section-shell pb-16">
      <div className="contact-panel">
        <div className="reveal-item">
          <SectionIntro
            eyebrow="Contact"
            title="Let&apos;s turn the next idea into a system that can actually ship."
            description="I enjoy building products with strong architecture, clean implementation and thoughtful interfaces. If you want someone who can connect front-end, back-end and delivery, I&apos;m open to the conversation."
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              className="contact-tile reveal-item"
            >
              <span className="text-xs font-medium tracking-[0.26em] text-[color:var(--color-text-muted)] uppercase">
                {contact.label}
              </span>
              <span className="mt-4 text-lg font-semibold tracking-[-0.03em] text-[color:var(--color-text)]">
                {contact.value}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
