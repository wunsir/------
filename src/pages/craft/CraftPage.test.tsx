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
    expect(screen.getByText('工艺主线')).toBeInTheDocument()
    expect(screen.getByText('制皮起底：回软与刮薄')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '刀口之后，角色才真正有了面相' }),
    ).toBeInTheDocument()
    expect(screen.getByText('影人成相')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: '华县旦角纹样样本' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '幕后场景先把一出戏的骨肉搭起来' }),
    ).toBeInTheDocument()
    expect(screen.getByText('幕后片段')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: '工坊实录：牛皮刮制与晾皮' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '一位影人的层次，不只在正面图案' }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('层次拆解').length).toBeGreaterThan(0)
    expect(
      screen.getByRole('heading', { level: 3, name: '牛皮回软与刮薄' }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: '活扣关节与操纵杆' }),
    ).toBeInTheDocument()

    expect(screen.getAllByRole('heading', { level: 2 }).length).toBeGreaterThanOrEqual(4)
    expect(screen.getAllByRole('heading', { level: 3 }).length).toBeGreaterThanOrEqual(8)
  })

  it('uses real craft objects and removes conceptual naming', () => {
    render(
      <MemoryRouter>
        <CraftPage />
      </MemoryRouter>,
    )

    expect(screen.getAllByText(/鱼鳔胶/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/牛皮/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/透光/).length).toBeGreaterThan(0)
    expect(screen.getAllByText(/关节/).length).toBeGreaterThan(0)

    expect(screen.queryByText('精雕青衣')).not.toBeInTheDocument()
    expect(screen.queryByText('重彩黑脸')).not.toBeInTheDocument()
    expect(screen.queryByText('提线武将')).not.toBeInTheDocument()
    expect(screen.queryByText('匠作录：刀与光的契约')).not.toBeInTheDocument()
    expect(screen.queryByText('结骨录：牵丝引线')).not.toBeInTheDocument()
  })

  it('shows restrained source anchors and a workbench grammar', () => {
    const { container } = render(
      <MemoryRouter>
        <CraftPage />
      </MemoryRouter>,
    )

    expect(screen.getByText('工艺案台')).toBeInTheDocument()
    expect(screen.getByText('资料锚点')).toBeInTheDocument()
    expect(screen.getByText('国家级非遗名录：华县皮影戏（陕西渭南）')).toBeInTheDocument()
    expect(screen.getByText('国家级非遗名录：唐山皮影戏（河北唐山）')).toBeInTheDocument()
    expect(screen.getByText('剧团演示资料（幕后操演与关节联动）')).toBeInTheDocument()

    expect(container.querySelector('.craft-workbench-hero')).toBeInTheDocument()
    expect(container.querySelector('.craft-process-card')).toBeInTheDocument()
  })
})
