import { typedSentences } from '../../data/site'

interface TypewriterLineProps {
  text: string
}

/**
 * Presentational line for the typewriter: reserved height (no layout
 * shift while typing) and a blinking caret. The animated churn is
 * aria-hidden; screen readers get the full sentence list once.
 */
export function TypewriterLine({ text }: TypewriterLineProps) {
  return (
    <div className="min-h-7">
      <span className="sr-only">{typedSentences.join(' ')}</span>
      <p aria-hidden="true" className="font-mono text-base font-medium text-accent-purple sm:text-lg">
        <span className="mr-2 select-none">&gt;</span>
        {text}
        <span
          className="ml-0.5 inline-block w-px animate-[caret-blink_1.1s_steps(1)_infinite] motion-reduce:animate-none"
          aria-hidden="true"
        >
          |
        </span>
      </p>
    </div>
  )
}
