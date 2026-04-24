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
      screen.getByRole('heading', { level: 1, name: '影人怎样做成' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '一张皮，怎样变成影人' }),
    ).toBeInTheDocument()
    expect(screen.getByText('制作步骤')).toBeInTheDocument()
    expect(screen.getByText('制皮：回软、刮薄、晾平')).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '角色的样子，是一刀一刀做出来的' }),
    ).toBeInTheDocument()
    expect(screen.getByText('角色做法')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: '华县旦角纹样' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '把材料和关节放回台后看' }),
    ).toBeInTheDocument()
    expect(screen.getByText('台后片段')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 3, name: '工坊记录：牛皮刮制与晾皮' }),
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { level: 2, name: '图案之外，还有厚薄、透光和杆路' }),
    ).toBeInTheDocument()
    expect(screen.getAllByText('工艺拆解').length).toBeGreaterThan(0)
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
    expect(screen.getByText('资料依据')).toBeInTheDocument()
    expect(screen.getByText('国家级非遗名录：华县皮影戏（陕西渭南）')).toBeInTheDocument()
    expect(screen.getByText('国家级非遗名录：唐山皮影戏（河北唐山）')).toBeInTheDocument()
    expect(screen.getByText('剧团演示资料（幕后操演与关节联动）')).toBeInTheDocument()

    expect(container.querySelector('.craft-workbench-hero')).toBeInTheDocument()
    expect(container.querySelector('.craft-process-card')).toBeInTheDocument()
  })
})
