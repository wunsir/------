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
      screen.getByRole('heading', { level: 1, name: '皮影来到今天' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '先把影人的样子整理清楚' }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('形象整理').length).toBeGreaterThan(0)
    expect(screen.getByText('整理形象：简化轮廓和纹样')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '保留一眼能认出的部分' }),
    ).toBeInTheDocument()
    expect(screen.getByText('角色样式')).toBeInTheDocument()
    expect(screen.getByText('剪影简化武生')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '也在展馆和舞台里出现' }),
    ).toBeInTheDocument()
    expect(screen.getByText('展陈与舞台')).toBeInTheDocument()
    expect(screen.getByText('博物馆展陈：看清皮影轮廓')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '今天的皮影，不只在老戏台上' }),
    ).toBeInTheDocument()
    expect(screen.getByText('今天在哪儿看见')).toBeInTheDocument()
    expect(screen.getByText('新的传播场景')).toBeInTheDocument()
    expect(screen.getAllByText('形象整理').length).toBeGreaterThan(0)

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

  it('shows restrained source anchors and an archive grammar', () => {
    const { container } = render(
      <MemoryRouter>
        <RebornPage />
      </MemoryRouter>,
    )

    expect(screen.getByText('设计档案')).toBeInTheDocument()
    expect(screen.getByText('资料来源')).toBeInTheDocument()
    expect(screen.getByText('中国非遗馆与地方博物馆皮影展陈说明')).toBeInTheDocument()
    expect(screen.getByText('高校设计课程与工作坊公开成果（皮影纹样再设计）')).toBeInTheDocument()
    expect(screen.getByText('公开品牌联名与文创发布中的皮影视觉应用')).toBeInTheDocument()

    expect(container.querySelector('.reborn-archive-hero')).toBeInTheDocument()
    expect(container.querySelector('.reborn-dossier-card')).toBeInTheDocument()
  })
})
