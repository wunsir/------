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
    expect(screen.getByText('视觉再设计：轮廓提纯与纹样简化')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '角色先被重写，气质才会变成今天的语言' }),
    ).toBeInTheDocument()
    expect(screen.getByText('角色改写')).toBeInTheDocument()
    expect(screen.getByText('剪影提纯武生样本')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '当代案例不是注脚，而是新的演出现场' }),
    ).toBeInTheDocument()
    expect(screen.getByText('当代表演')).toBeInTheDocument()
    expect(screen.getByText('博物馆展陈：皮影轮廓导览样本')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '更新不是换皮，而是换入口、换表演、换视觉句法' }),
    ).toBeInTheDocument()
    expect(screen.getByText('更新轨道')).toBeInTheDocument()
    expect(screen.getByText('传播方式更新')).toBeInTheDocument()
    expect(screen.getByText('视觉再设计更新')).toBeInTheDocument()

    expect(screen.getAllByRole('heading', { level: 2 }).length).toBeGreaterThanOrEqual(4)
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThanOrEqual(8)
  })

  it('keeps real reborn directions and removes cyber-fiction naming', () => {
    render(
      <MemoryRouter>
        <RebornPage />
      </MemoryRouter>,
    )

    expect(screen.getAllByText(/纹样简化/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/博物馆展陈/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/多媒体舞台/).length).toBeGreaterThan(0)

    expect(screen.queryByText('无相武将')).not.toBeInTheDocument()
    expect(screen.queryByText('流光青衣')).not.toBeInTheDocument()
    expect(screen.queryByText('矩阵巨灵')).not.toBeInTheDocument()
    expect(screen.queryByText('《皮影·无界》空间大展')).not.toBeInTheDocument()
    expect(screen.queryByText('实验剧《镜花水月》')).not.toBeInTheDocument()
  })
})
