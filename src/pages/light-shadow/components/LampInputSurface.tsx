import { useRef } from 'react'

import type { LightShadowInputMode } from '../../../types/shadow-puppetry'

export type LampInputPayload = {
  clientX: number
  clientY: number
  bounds: DOMRect
}

type LampInputSurfaceProps = {
  onInput: (
    payload: LampInputPayload,
    mode: Exclude<LightShadowInputMode, 'none'>,
  ) => void
  onInputEnd: () => void
}

export function LampInputSurface({
  onInput,
  onInputEnd,
}: LampInputSurfaceProps) {
  const touchOriginRef = useRef<{ x: number; y: number } | null>(null)

  function toPayload(
    target: EventTarget & HTMLDivElement,
    clientX: number,
    clientY: number,
  ): LampInputPayload {
    return {
      clientX,
      clientY,
      bounds: target.getBoundingClientRect(),
    }
  }

  return (
    <div
      aria-label="灯位输入面"
      className="absolute inset-0 z-20"
      data-testid="lamp-input-surface"
      onMouseLeave={onInputEnd}
      onMouseMove={(event) => {
        onInput(toPayload(event.currentTarget, event.clientX, event.clientY), 'mouse')
      }}
      onTouchEnd={() => {
        touchOriginRef.current = null
        onInputEnd()
      }}
      onTouchMove={(event) => {
        const touch = event.touches[0]

        if (!touch || !touchOriginRef.current) {
          return
        }

        const deltaX = touch.clientX - touchOriginRef.current.x
        const deltaY = touch.clientY - touchOriginRef.current.y

        if (Math.abs(deltaY) > Math.abs(deltaX) * 1.15) {
          return
        }

        event.preventDefault()
        onInput(toPayload(event.currentTarget, touch.clientX, touch.clientY), 'touch')
      }}
      onTouchStart={(event) => {
        const touch = event.touches[0]

        if (!touch) {
          return
        }

        touchOriginRef.current = { x: touch.clientX, y: touch.clientY }
        onInput(toPayload(event.currentTarget, touch.clientX, touch.clientY), 'touch')
      }}
      style={{ touchAction: 'pan-y' }}
    />
  )
}
