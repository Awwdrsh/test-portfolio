import { useEffect, useState } from 'react'
import './Navbar.css'

const sectionIds = ['home', 'about', 'skills', 'projects', 'timeline', 'contact']

function Navbar({ initials, status, statusActive }) {
  const [activeId, setActiveId] = useState('home')
  const [isCompact, setIsCompact] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsCompact(window.scrollY > 50)

      let current = 'home'

      sectionIds.forEach((id) => {
        const section = document.getElementById(id)

        if (section && section.getBoundingClientRect().top <= 140) {
          current = id
        }
      })

      setActiveId(current)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const closeMenu = () => setIsOpen(false)
    window.addEventListener('hashchange', closeMenu)

    return () => window.removeEventListener('hashchange', closeMenu)
  }, [])

  return (
    <header className={isCompact ? 'navbar is-compact' : 'navbar'} role="navigation" aria-label="Main navigation">
      <div className="navbar-inner container-shell">
        <a className="navbar-badge" href="#home" aria-label="Go to home (top of page)" title="Back to top">
          {initials}
        </a>

        <button
          type="button"
          className={isOpen ? 'navbar-toggle is-open' : 'navbar-toggle'}
          onClick={() => setIsOpen((value) => !value)}
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
          aria-controls="navbar-menu"
          title={isOpen ? 'Close menu' : 'Open menu'}
        >
          <span aria-hidden="true">{isOpen ? '✕' : '☰'}</span>
        </button>

        <nav className={isOpen ? 'navbar-links is-open' : 'navbar-links'} id="navbar-menu">
          {sectionIds.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={activeId === id ? 'navbar-link is-active' : 'navbar-link'}
              onClick={() => setIsOpen(false)}
              aria-label={`Navigate to ${id} section`}
              title={`Go to ${id}`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </nav>

        <div className={statusActive ? 'navbar-status is-active' : 'navbar-status'} role="status" aria-live="polite">
          [{status}]
        </div>
      </div>
    </header>
  )
}

export default Navbar
