import { act, render, screen, within } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

import { AppRouter } from './AppRouter'
import { appRoutes } from './routes'

function advanceScene(ms: number) {
  act(() => {
    vi.advanceTimersByTime(ms)
  })
}

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

function renderRoute(initialEntry: string) {
  const router = createMemoryRouter(appRoutes, {
    initialEntries: [initialEntry],
  })

  return {
    router,
    ...render(<RouterProvider router={router} />),
  }
}

describe('app routing', () => {
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

  it.each([
    ['/craft', '雕一身骨'],
    ['/light-shadow', '灯亮，影便活了'],
    ['/reborn', '旧影入新幕'],
  ])('renders %s with the expected hero heading', (path, heading) => {
    renderRoute(path)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: heading,
      }),
    ).toBeInTheDocument()

    const navigation = screen.getByRole('navigation', { name: '主导航' })

    expect(within(navigation).getByRole('link', { name: '首页' })).toHaveAttribute('href', '/')
    expect(within(navigation).getByRole('link', { name: '制作工艺' })).toHaveAttribute(
      'href',
      '/craft',
    )
    expect(within(navigation).getByRole('link', { name: '光影美学' })).toHaveAttribute(
      'href',
      '/light-shadow',
    )
    expect(within(navigation).getByRole('link', { name: '当代新生' })).toHaveAttribute(
      'href',
      '/reborn',
    )
  })

  it('renders the home route with the opening scene and delayed navigation', () => {
    renderRoute('/')

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: '一戏入影',
      }),
    ).toBeInTheDocument()
    expect(screen.queryByRole('navigation', { name: '主导航' })).not.toBeInTheDocument()

    advanceScene(5600)

    const navigation = screen.getByRole('navigation', { name: '首页主导航' })

    expect(within(navigation).getByRole('link', { name: '首页' })).toHaveAttribute('href', '/')
    expect(within(navigation).getByRole('link', { name: '制作工艺' })).toHaveAttribute(
      'href',
      '/craft',
    )
    expect(within(navigation).getByRole('link', { name: '光影美学' })).toHaveAttribute(
      'href',
      '/light-shadow',
    )
    expect(within(navigation).getByRole('link', { name: '当代新生' })).toHaveAttribute(
      'href',
      '/reborn',
    )
  })

  it('recovers unknown paths by redirecting back to home', () => {
    const { router } = renderRoute('/missing-scene')

    advanceScene(20)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: '一戏入影',
      }),
    ).toBeInTheDocument()

    expect(router.state.location.pathname).toBe('/')
  })

  it('renders GitHub Pages hash routes from the current URL', () => {
    window.history.replaceState({}, '', '/shadow-puppetry-exhibit/#/craft')

    render(<AppRouter />)
    advanceScene(20)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: '雕一身骨',
      }),
    ).toBeInTheDocument()

    window.history.replaceState({}, '', '/')
  })

  it('renders light-shadow route from a GitHub Pages hash URL', () => {
    window.history.replaceState({}, '', '/shadow-puppetry-exhibit/#/light-shadow')

    render(<AppRouter />)
    advanceScene(20)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: '灯亮，影便活了',
      }),
    ).toBeInTheDocument()

    expect(screen.getByTestId('l1-hero-stage')).toBeInTheDocument()

    window.history.replaceState({}, '', '/')
  })
})
