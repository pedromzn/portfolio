import type { ThemeMode } from '../../hooks/useTheme'
import profilePhoto from '../../assets/WhatsApp Image 2026-03-22 at 19.26.03.jpeg'

type HeaderProps = {
  navigation: Array<{ href: string; label: string }>
  theme: ThemeMode
  onToggleTheme: () => void
}

export function Header({ navigation, theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-[color:var(--color-border)] bg-[color:color-mix(in_srgb,var(--color-surface)_76%,transparent)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-3 text-sm font-semibold tracking-[0.28em] text-[color:var(--color-text-muted)] uppercase">
          <span className="header-avatar">
            <img
              src={profilePhoto}
              alt="Pedro Menzinger profile"
              className="h-full w-full object-cover"
            />
          </span>
          <span className="hidden sm:block">Pedro Menzinger</span>
        </a>

        <nav aria-label="Primary navigation" className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[color:var(--color-text-muted)] transition duration-300 hover:text-[color:var(--color-text)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="theme-toggle"
          >
            <span className="theme-toggle__track">
              <span className="theme-toggle__thumb">
                {theme === 'dark' ? (
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                    <path
                      d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 1 0 21 12.8Z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                    <path
                      d="M12 4V2m0 20v-2m8-8h2M2 12h2m12.95 5.66 1.41 1.41M4.64 4.64l1.41 1.41m10.9-1.41 1.41-1.41M4.64 19.36l1.41-1.41M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.7"
                    />
                  </svg>
                )}
              </span>
            </span>
          </button>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border border-[color:var(--color-border-strong)] px-5 py-2.5 text-sm font-semibold text-[color:var(--color-text)] transition duration-300 hover:-translate-y-0.5 hover:border-[color:var(--color-accent)] hover:bg-[color:var(--color-panel)]"
          >
            Let&apos;s Build
          </a>
        </div>
      </div>
    </header>
  )
}
