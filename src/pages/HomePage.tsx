import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTheme } from '../hooks/useTheme'
import { Footer } from '../components/sections/Footer'
import { AboutSection } from '../components/sections/AboutSection'
import { ContactSection } from '../components/sections/ContactSection'
import { ExpertiseSection } from '../components/sections/ExpertiseSection'
import { HeroSection } from '../components/sections/HeroSection'
import { ProjectsSection } from '../components/sections/ProjectsSection'
import { Header } from '../components/layout/Header'
import { portfolioData } from '../data/portfolio'

export function HomePage() {
  const { theme, toggleTheme } = useTheme()

  useScrollReveal()

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[color:var(--color-bg)] text-[color:var(--color-text)]">
      <Header
        navigation={portfolioData.navigation}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      <main>
        <HeroSection
          roles={portfolioData.hero.roles}
          stats={portfolioData.hero.stats}
          principles={portfolioData.hero.principles}
        />
        <AboutSection
          copy={portfolioData.about.copy}
          credentials={portfolioData.about.credentials}
          highlights={portfolioData.about.highlights}
        />
        <ExpertiseSection groups={portfolioData.expertise} />
        <ProjectsSection projects={portfolioData.projects} />
        <ContactSection contacts={portfolioData.contacts} />
      </main>

      <Footer />
    </div>
  )
}
