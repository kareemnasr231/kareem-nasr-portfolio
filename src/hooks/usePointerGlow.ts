import { useCallback, useRef } from 'react'
import type { MouseEvent } from 'react'

/**
 * Tracks the pointer inside an element and writes the position to the
 * CSS custom properties --mouse-x / --mouse-y — directly on the DOM
 * node, so mouse movement never triggers a React re-render.
 */
export function usePointerGlow<T extends HTMLElement>() {
  const ref = useRef<T | null>(null)

  const onMouseMove = useCallback((event: MouseEvent<T>) => {
    const element = ref.current
    if (!element) return
    const rect = element.getBoundingClientRect()
    element.style.setProperty('--mouse-x', `${event.clientX - rect.left}px`)
    element.style.setProperty('--mouse-y', `${event.clientY - rect.top}px`)
  }, [])

  return { ref, onMouseMove }
}
