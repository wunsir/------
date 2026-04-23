import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { CraftPage } from './CraftPage'

describe('CraftPage', () => {
  it('renders the craft timeline, character cards, play cards, and making layers', () => {
    render(
      <MemoryRouter>
        <CraftPage />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', { level: 1, name: '雕一身骨' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '从一张皮到一位影人' }),
    ).toBeInTheDocument()
    expect(screen.getByText('制皮：透光的底骨')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '刀口之后，角色才真正有了面相' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: '精雕青衣' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '幕后场景先把一出戏的骨肉搭起来' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: '匠作录：刀与光的契约' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '一位影人的层次，不只在正面图案' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: '选皮取透' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: '关节起势' }),
    ).toBeInTheDocument()
  })
})
