import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const revealGroups = document.querySelectorAll<HTMLElement>('[data-reveal-group]')

    if (!revealGroups.length) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.setAttribute('data-reveal-visible', 'true')
          observer.unobserve(entry.target)
        })
      },
      {
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.02,
      },
    )

    revealGroups.forEach((group) => {
      observer.observe(group)
    })

    return () => {
      observer.disconnect()
    }
  }, [])
}
