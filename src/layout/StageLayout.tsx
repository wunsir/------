import { AnimatePresence, motion } from 'framer-motion'
import {
  NavLink,
  Outlet,
  useLocation,
  useOutlet,
} from 'react-router-dom'

import { themeRoutes } from '../router/theme-pages'

const pageTransition = {
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -18 },
}

export function StageLayout() {
  const location = useLocation()
  const outlet = useOutlet()
  const isHomeRoute = location.pathname === '/'

  return (
    <div className="relative isolate min-h-screen overflow-hidden bg-[var(--stage-bg)] text-[var(--stage-paper)]">
      <div className="stage-glow pointer-events-none absolute inset-0" />
      <div className="curtain-overlay pointer-events-none absolute inset-0" />

      <div
        className={[
          'relative mx-auto flex min-h-screen w-full flex-col',
          isHomeRoute ? 'max-w-none px-0 pb-0 pt-0' : 'max-w-7xl px-4 pb-10 pt-6 sm:px-6 lg:px-8',
        ].join(' ')}
      >
        {!isHomeRoute ? (
          <header className="stage-panel sticky top-4 z-20 mb-6 flex flex-col gap-4 px-5 py-4 backdrop-blur sm:px-6 lg:flex-row lg:items-center lg:justify-between">
            <NavLink className="flex items-center gap-4" to="/">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-[rgba(255,255,255,0.04)] font-display text-xl text-[var(--stage-gold)]">
                影
              </span>
              <div className="space-y-1">
                <p className="font-display text-xl text-[var(--stage-paper)] sm:text-2xl">
                  一戏入影
                </p>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[var(--stage-muted)] sm:text-xs sm:tracking-[0.35em]">
                  Shadow Puppet Theatre
                </p>
              </div>
            </NavLink>

            <nav aria-label="主导航" className="flex flex-wrap gap-2">
              {themeRoutes.map((entry) => (
                <NavLink
                  key={entry.path}
                  className={({ isActive }) =>
                    [
                      'rounded-full border px-4 py-2 text-sm transition',
                      isActive
                        ? 'border-[rgba(240,197,112,0.32)] bg-[rgba(240,197,112,0.1)] text-[var(--stage-paper)]'
                        : 'border-white/10 bg-[rgba(255,255,255,0.03)] text-[var(--stage-ink-soft)] hover:border-white/20 hover:text-[var(--stage-paper)]',
                    ].join(' ')
                  }
                  end={entry.path === '/'}
                  to={entry.path}
                >
                  {entry.navLabel}
                </NavLink>
              ))}
            </nav>
          </header>
        ) : null}

        <main className="flex-1">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              animate="animate"
              exit="exit"
              initial="initial"
              transition={{ duration: 0.35, ease: 'easeOut' }}
              variants={pageTransition}
            >
              {outlet ?? <Outlet />}
            </motion.div>
          </AnimatePresence>
        </main>

        {!isHomeRoute ? (
          <footer className="mt-8 grid gap-4 px-2 text-sm text-[var(--stage-ink-soft)] sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-2xl">
              一盏灯、一方幕、一身影，旧戏不必退回过去，也能在今天被重新看见。
            </p>
            <p className="text-xs uppercase tracking-[0.32em] text-[var(--stage-muted)]">
              暗场 · 幕布 · 暖光 · 剪影
            </p>
          </footer>
        ) : null}
      </div>
    </div>
  )
}
