import { act, fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { HomePage } from './HomePage'

function mockMatchMedia(reducedMotion: boolean) {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: query === '(prefers-reduced-motion: reduce)' ? reducedMotion : false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      addListener: vi.fn(),
      removeListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
}

function renderHomePage() {
  return render(
    <MemoryRouter>
      <HomePage />
    </MemoryRouter>,
  )
}

function advanceScene(ms: number) {
  act(() => {
    vi.advanceTimersByTime(ms)
  })
}

describe('HomePage opening scene', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-04-24T12:00:00.000Z'))
    sessionStorage.clear()
    mockMatchMedia(false)
  })

  afterEach(() => {
    act(() => {
      vi.runOnlyPendingTimers()
    })
    vi.useRealTimers()
    vi.unstubAllGlobals()
  })

  it('plays the full opening on first visit and eventually enters ready', () => {
    renderHomePage()

    const scene = screen.getByTestId('home-opening-scene')

    expect(scene).toHaveAttribute('data-opening-mode', 'full')
    expect(scene).toHaveAttribute('data-scene-phase', 'closed')
    expect(screen.queryByRole('navigation', { name: '主导航' })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: '查看灯与影' })).not.toBeInTheDocument()

    advanceScene(4190)

    expect(scene).toHaveAttribute('data-scene-phase', 'puppet')
    expect(screen.queryByRole('navigation', { name: '主导航' })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: '查看制作工艺' })).not.toBeInTheDocument()

    advanceScene(1200)

    expect(scene).toHaveAttribute('data-scene-phase', 'ready')
    expect(scene).toHaveAttribute('data-nav-visible', 'true')
    expect(scene).toHaveAttribute('data-guide-visible', 'true')
    expect(screen.getByRole('navigation', { name: '主导航' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '查看灯与影' })).toHaveAttribute(
      'href',
      '/light-shadow',
    )
  })

  it('uses the shortened revisit opening after the session has already seen the full opening', () => {
    sessionStorage.setItem('hasSeenHomeOpening', 'true')
    sessionStorage.setItem('lastHomeReadyAt', String(Date.now() - 45_000))
    sessionStorage.setItem('lastHomeExitAt', String(Date.now() - 30_000))

    renderHomePage()

    const scene = screen.getByTestId('home-opening-scene')

    expect(scene).toHaveAttribute('data-opening-mode', 'short')
    expect(scene).toHaveAttribute('data-scene-phase', 'curtain')

    advanceScene(1800)

    expect(scene).toHaveAttribute('data-scene-phase', 'ready')
  })

  it('keeps the guide order fixed as light-shadow, craft, then reborn', () => {
    renderHomePage()

    advanceScene(5600)

    const guideLinks = screen.getAllByRole('link', { name: /^查看/ })

    expect(guideLinks.map((link) => link.getAttribute('href'))).toEqual([
      '/light-shadow',
      '/craft',
      '/reborn',
    ])
  })

  it('keeps the mobile route list behind the menu entry until the user opens it', () => {
    renderHomePage()

    advanceScene(5600)

    const menuButton = screen.getByRole('button', { name: '打开章节菜单' })

    expect(menuButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.queryByRole('navigation', { name: '章节菜单' })).not.toBeInTheDocument()

    fireEvent.click(menuButton)

    expect(menuButton).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('navigation', { name: '章节菜单' })).toBeInTheDocument()
  })

  it('does not expose navigation or guide links before the opening handoff', () => {
    renderHomePage()

    advanceScene(3190)

    const scene = screen.getByTestId('home-opening-scene')

    expect(scene).toHaveAttribute('data-scene-phase', 'light')
    expect(screen.queryByRole('navigation', { name: '主导航' })).not.toBeInTheDocument()
    expect(screen.queryByRole('link', { name: '查看灯与影' })).not.toBeInTheDocument()
    expect(screen.queryByText('今夜上演三折')).not.toBeInTheDocument()
  })

  it('enters a static ready state immediately when reduced motion is enabled', () => {
    mockMatchMedia(true)

    renderHomePage()

    const scene = screen.getByTestId('home-opening-scene')

    expect(scene).toHaveAttribute('data-opening-mode', 'static')
    expect(scene).toHaveAttribute('data-scene-phase', 'ready')
    expect(screen.getByRole('navigation', { name: '主导航' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: '查看今天的皮影' })).toHaveAttribute(
      'href',
      '/reborn',
    )
  })
})
