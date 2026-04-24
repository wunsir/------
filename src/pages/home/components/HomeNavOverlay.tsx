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

      <nav
        aria-label="主导航"
        className="home-nav-links home-nav-links-desktop"
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

      <button
        aria-controls="home-mobile-nav-links"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? '关闭章节菜单' : '打开章节菜单'}
        className="home-nav-toggle"
        type="button"
        onClick={() => {
          setMenuOpen((current) => !current)
        }}
      >
        <span className="home-nav-toggle-lines" aria-hidden="true">
          <span />
          <span />
          <span />
        </span>
      </button>

      {menuOpen ? (
        <nav
          aria-label="章节菜单"
          className="home-nav-links home-nav-links-mobile is-open"
          id="home-mobile-nav-links"
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
      ) : null}
    </header>
  )
}
