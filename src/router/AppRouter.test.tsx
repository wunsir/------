import { render, screen, waitFor, within } from '@testing-library/react'
import { RouterProvider, createMemoryRouter } from 'react-router-dom'

import { appRoutes } from './routes'

function renderRoute(initialEntry: string) {
  const router = createMemoryRouter(appRoutes, {
    initialEntries: [initialEntry],
  })

  return render(<RouterProvider router={router} />)
}

describe('app routing', () => {
  it.each([
    ['/', '一戏入影'],
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

  it('recovers unknown paths by redirecting back to home', async () => {
    renderRoute('/missing-scene')

    await waitFor(() => {
      expect(
        screen.getByRole('heading', {
          level: 1,
          name: '一戏入影',
        }),
      ).toBeInTheDocument()
    })
  })
})
