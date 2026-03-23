export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-border)] px-6 py-8 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm text-[color:var(--color-text-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>Pedro Menzinger. Full Stack Engineer focused on scalable, production-ready systems.</p>
        <a
          href="#home"
          className="transition duration-300 hover:text-[color:var(--color-text)]"
        >
          Back to top
        </a>
      </div>
    </footer>
  )
}
