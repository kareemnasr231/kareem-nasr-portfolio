import type { Transition, Variants } from 'framer-motion'

/** Shared easing — a soft ease-out used across the site. */
export const EASE_OUT: Transition['ease'] = [0.22, 1, 0.36, 1]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: EASE_OUT },
  },
}

export const staggerChildren: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

/** Animate into view once, slightly before fully visible. */
export const viewportOnce = { once: true, amount: 0.25 } as const
