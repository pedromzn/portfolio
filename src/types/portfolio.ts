export type PortfolioData = {
  navigation: Array<{ href: string; label: string }>
  hero: {
    roles: string[]
    stats: Array<{ label: string; value: string }>
    principles: string[]
  }
  about: {
    copy: string[]
    credentials: Array<{ label: string; value: string; description: string }>
    highlights: Array<{ title: string; description: string }>
  }
  expertise: Array<{
    title: string
    description: string
    items: string[]
  }>
  projects: Array<{
    title: string
    category: string
    summary: string
    stack: string[]
    metrics: string[]
    repoHref: string
  }>
  contacts: Array<{
    label: string
    value: string
    href: string
  }>
}
