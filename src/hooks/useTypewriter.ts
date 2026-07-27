import { useEffect, useState } from 'react'

export type TypewriterPhase = 'typing' | 'holding' | 'deleting' | 'pausing'

export interface UseTypewriterOptions {
  sentences: readonly string[]
  /** ms per typed character */
  typingMs?: number
  /** ms per deleted character */
  deletingMs?: number
  /** ms the completed sentence stays visible */
  holdMs?: number
  /** ms between deleting one sentence and typing the next */
  pauseMs?: number
  /** false (e.g. prefers-reduced-motion) → first sentence, static */
  enabled?: boolean
}

export interface UseTypewriterResult {
  /** The currently visible slice of the active sentence. */
  text: string
  /** Index of the active sentence — increments exactly when typing starts. */
  sentenceIndex: number
  phase: TypewriterPhase
}

/**
 * Infinite type → hold → delete → pause loop over a list of sentences.
 * Runs on a single self-cleaning timeout per tick, so unmounting (or a
 * dependency change) can never leak timers. With `enabled: false` it
 * returns the first sentence as stable text and never schedules a timer.
 */
export function useTypewriter({
  sentences,
  typingMs = 70,
  deletingMs = 40,
  holdMs = 1300,
  pauseMs = 500,
  enabled = true,
}: UseTypewriterOptions): UseTypewriterResult {
  const [sentenceIndex, setSentenceIndex] = useState(0)
  const [charCount, setCharCount] = useState(0)
  const [phase, setPhase] = useState<TypewriterPhase>('typing')

  useEffect(() => {
    if (!enabled || sentences.length === 0) return

    const sentence = sentences[sentenceIndex % sentences.length] ?? ''
    let delay: number
    let tick: () => void

    switch (phase) {
      case 'typing':
        if (charCount < sentence.length) {
          delay = typingMs
          tick = () => setCharCount((count) => count + 1)
        } else {
          delay = 0
          tick = () => setPhase('holding')
        }
        break
      case 'holding':
        delay = holdMs
        tick = () => setPhase('deleting')
        break
      case 'deleting':
        if (charCount > 0) {
          delay = deletingMs
          tick = () => setCharCount((count) => count - 1)
        } else {
          delay = 0
          tick = () => setPhase('pausing')
        }
        break
      case 'pausing':
        delay = pauseMs
        tick = () => {
          setSentenceIndex((index) => (index + 1) % sentences.length)
          setPhase('typing')
        }
        break
    }

    const id = window.setTimeout(tick, delay)
    return () => window.clearTimeout(id)
  }, [enabled, sentences, sentenceIndex, charCount, phase, typingMs, deletingMs, holdMs, pauseMs])

  if (!enabled || sentences.length === 0) {
    return { text: sentences[0] ?? '', sentenceIndex: 0, phase: 'holding' }
  }

  const active = sentences[sentenceIndex % sentences.length] ?? ''
  return { text: active.slice(0, charCount), sentenceIndex, phase }
}
