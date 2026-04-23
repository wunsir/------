import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { HomePage } from './HomePage'

describe('HomePage', () => {
  it('renders the director-style guide with three curated entry cards', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', { level: 1, name: '一戏入影' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: '今夜上演三折' }),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: '进入制作工艺' })).toHaveAttribute(
      'href',
      '/craft',
    )
    expect(screen.getByRole('link', { name: '进入光影美学' })).toHaveAttribute(
      'href',
      '/light-shadow',
    )
    expect(screen.getByRole('link', { name: '进入当代新生' })).toHaveAttribute(
      'href',
      '/reborn',
    )
    expect(screen.getByText('推荐先看')).toBeInTheDocument()
  })

  it('puts the flagship light-shadow guide card first', () => {
    render(
      <MemoryRouter>
        <HomePage />
      </MemoryRouter>,
    )

    const guideLinks = screen.getAllByRole('link', { name: /^进入/ })

    expect(guideLinks[0]).toHaveAttribute('href', '/light-shadow')
    expect(guideLinks[1]).toHaveAttribute('href', '/craft')
    expect(guideLinks[2]).toHaveAttribute('href', '/reborn')
  })
})
