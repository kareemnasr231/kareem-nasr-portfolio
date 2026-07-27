import { motion, useReducedMotion } from 'framer-motion'
import characterUrl from '../../assets/illustrations/kareem-character.png'
import { EASE_OUT } from '../../lib/motion'

/**
 * The illustrated character — large and dominant, floating directly on
 * the light background with no card, border or frame. The environment
 * is CSS only: a purple watercolor-style glow, a faint blue accent, a
 * halftone dot patch (reference style) and a soft grounding shadow.
 * Entrance fade/translate, then a very slight continuous float.
 */
export function CharacterFigure() {
  const reducedMotion = useReducedMotion()

  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: EASE_OUT }}
      className="relative w-full max-w-105 sm:max-w-120 xl:max-w-135"
    >
      {/* Purple watercolor-like glow */}
      <div
        aria-hidden="true"
        className="absolute top-[46%] left-1/2 h-[68%] w-[96%] -translate-x-1/2 -translate-y-1/2 rounded-[45%_55%_52%_48%] bg-[radial-gradient(closest-side,rgb(139_92_246/0.48),rgb(139_92_246/0.22)_58%,transparent)] blur-[48px]"
      />
      {/* Blue accent */}
      <div
        aria-hidden="true"
        className="absolute top-[68%] left-[68%] h-[38%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-blue/25 blur-[46px]"
      />
      {/* Halftone dot patch */}
      <div
        aria-hidden="true"
        className="bg-halftone absolute top-[14%] left-[2%] h-40 w-40 opacity-60 mask-[radial-gradient(closest-side,black,transparent)]"
      />

      <motion.img
        src={characterUrl}
        alt="Illustrated portrait of Kareem Nasr"
        width={982}
        height={973}
        fetchPriority="high"
        animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 6, ease: 'easeInOut', repeat: Infinity, delay: 1 }}
        className="relative h-auto w-full object-contain mask-[linear-gradient(to_bottom,black_84%,transparent_99%)]"
      />

      {/* Soft grounding shadow */}
      <div
        aria-hidden="true"
        className="absolute bottom-4 left-1/2 h-6 w-48 -translate-x-1/2 rounded-[100%] bg-ink/15 blur-lg"
      />
    </motion.div>
  )
}
