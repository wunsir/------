import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'

import { RebornPage } from './RebornPage'

describe('RebornPage', () => {
  it('renders the reborn timeline, character cards, cases, and update tracks', () => {
    render(
      <MemoryRouter>
        <RebornPage />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', { level: 1, name: '旧影入新幕' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '让旧影继续进入今天' }),
    ).toBeInTheDocument()
    expect(screen.getByText('新幕开场')).toBeInTheDocument()
    expect(screen.getByText('视觉解构：提纯基因')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '角色先被重写，气质才会变成今天的语言' }),
    ).toBeInTheDocument()
    expect(screen.getByText('角色改写')).toBeInTheDocument()
    expect(screen.getByText('无相武将')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '当代案例不是注脚，而是新的演出现场' }),
    ).toBeInTheDocument()
    expect(screen.getByText('当代表演')).toBeInTheDocument()
    expect(screen.getByText('《皮影·无界》空间大展')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '更新不是换皮，而是换入口、换表演、换视觉句法' }),
    ).toBeInTheDocument()
    expect(screen.getByText('更新轨道')).toBeInTheDocument()
    expect(screen.getByText('传播方式更新')).toBeInTheDocument()
    expect(screen.getByText('视觉再设计更新')).toBeInTheDocument()
  })
})
