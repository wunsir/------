import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'

import { LightShadowPage } from './LightShadowPage'

describe('LightShadowPage', () => {
  function renderPage() {
    return render(
      <MemoryRouter>
        <LightShadowPage />
      </MemoryRouter>,
    )
  }

  it('keeps the required structure order instead of uniform section stacking', () => {
    renderPage()

    expect(
      screen.getByRole('heading', { level: 1, name: '灯亮，影便活了' }),
    ).toBeInTheDocument()

    const orderedSections = screen
      .getAllByTestId(/^scene-order-/)
      .map((node) => node.getAttribute('data-testid'))

    expect(orderedSections).toEqual([
      'scene-order-hero',
      'scene-order-backstage',
      'scene-order-moments',
      'scene-order-timeline',
    ])
  })

  it('renders a fallback player when there is no active input', () => {
    renderPage()

    expect(screen.getByTestId('scene-fallback-player')).toBeInTheDocument()
    expect(screen.getByTestId('l1-hero-stage')).toHaveAttribute('data-scene-phase', 'auto-demo')
  })

  it('switches the on-stage actor when selecting another role', async () => {
    const user = userEvent.setup()

    renderPage()

    expect(screen.getByTestId('stage-actor-name')).toHaveTextContent('穆桂英')

    await user.click(screen.getByRole('button', { name: '净角上场' }))

    expect(screen.getByTestId('stage-actor-name')).toHaveTextContent('钟馗')
    expect(screen.getByTestId('on-stage-announcer')).toHaveTextContent('钟馗上场')
  })

  it('updates scene feedback for both mouse and touch input', () => {
    renderPage()

    const stage = screen.getByTestId('l1-hero-stage')
    const inputSurface = screen.getByTestId('lamp-input-surface')

    fireEvent.mouseMove(inputSurface, { clientX: 240, clientY: 120 })

    expect(stage).toHaveAttribute('data-input-mode', 'mouse')
    expect(stage.style.getPropertyValue('--lamp-u')).not.toBe('')

    fireEvent.touchStart(inputSurface, {
      touches: [{ clientX: 120, clientY: 200, identifier: 1 }],
    })
    fireEvent.touchMove(inputSurface, {
      touches: [{ clientX: 180, clientY: 160, identifier: 1 }],
    })

    expect(stage).toHaveAttribute('data-input-mode', 'touch')
  })
})
