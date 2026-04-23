import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

import { LightShadowPage } from './LightShadowPage'

describe('LightShadowPage', () => {
  it('filters character cards by role type', async () => {
    const user = userEvent.setup()

    render(
      <MemoryRouter>
        <LightShadowPage />
      </MemoryRouter>,
    )

    expect(
      screen.getByRole('heading', { level: 1, name: '灯亮，影便活了' }),
    ).toBeInTheDocument()
    expect(screen.getByText('穆桂英')).toBeInTheDocument()
    expect(screen.getByText('钟馗')).toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: '净角' }))

    await waitFor(() => {
      expect(screen.queryByText('穆桂英')).not.toBeInTheDocument()
    })

    expect(screen.getByText('钟馗')).toBeInTheDocument()
    expect(screen.getByText('当前筛选：净角')).toBeInTheDocument()
  })
})
