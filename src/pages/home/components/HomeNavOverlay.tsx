import { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { themeRoutes } from '../../../router/theme-pages'

type HomeNavOverlayProps = {
  visible: boolean
}

export function HomeNavOverlay({ visible }: HomeNavOverlayProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  if (!visible) {
    return null
  }

  return (
    <header className="home-nav-overlay">
      <NavLink className="home-nav-brand" to="/">
        <span className="home-nav-brand-mark">影</span>
        <span className="home-nav-brand-copy">
          <span className="home-nav-brand-title">一戏入影</span>
          <span className="home-nav-brand-subtitle">Shadow Puppet Theatre</span>
        </span>
      </NavLink>

      <button
        aria-controls="home-nav-links"
        aria-expanded={menuOpen}
        className="home-nav-toggle"
        type="button"
        onClick={() => {
          setMenuOpen((current) => !current)
        }}
      >
        章节
      </button>

      <nav
        aria-label="首页主导航"
        className={`home-nav-links ${menuOpen ? 'is-open' : ''}`}
        id="home-nav-links"
      >
        {themeRoutes.map((entry) => (
          <NavLink
            key={entry.path}
            className={({ isActive }) =>
              ['home-nav-link', isActive ? 'is-active' : ''].join(' ').trim()
            }
            end={entry.path === '/'}
            to={entry.path}
          >
            {entry.navLabel}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
