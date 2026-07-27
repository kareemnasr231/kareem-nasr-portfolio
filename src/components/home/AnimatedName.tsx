import { useEffect, useRef } from 'react'
import { motion, useAnimationControls, useReducedMotion } from 'framer-motion'
import { siteConfig } from '../../data/site'
import { EASE_OUT } from '../../lib/motion'

/**
 * Two premium gradients — blue→purple and purple→blue — alternating on
 * every sentence change. The switch crossfades between stacked text
 * layers while the background position shifts subtly; a very slight
 * blur-and-recover pulse marks the transition. No layout shift, no
 * flashing, name always readable.
 */
const NAME_GRADIENTS = [
  'from-accent-blue to-accent-purple',
  'from-accent-purple to-accent-blue',
] as const

interface AnimatedNameProps {
  /** Index of the sentence currently being typed — drives the theme. */
  themeIndex: number
}

export function AnimatedName({ themeIndex }: AnimatedNameProps) {
  const controls = useAnimationControls()
  const reducedMotion = useReducedMotion()
  const isFirstRender = useRef(true)
  const activeTheme = themeIndex % NAME_GRADIENTS.length

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false
      return
    }
    if (reducedMotion) return
    void controls.start({
      filter: ['blur(0px)', 'blur(1.2px)', 'blur(0px)'],
      transition: { duration: 0.55, ease: EASE_OUT },
    })
  }, [themeIndex, controls, reducedMotion])

  return (
    <motion.h1
      animate={controls}
      className="relative font-display text-5xl leading-[1.06] font-bold tracking-tight whitespace-nowrap sm:text-6xl"
    >
      <span className="sr-only">
        {siteConfig.firstName} {siteConfig.lastName}
      </span>
      {NAME_GRADIENTS.map((gradient, index) => (
        <span
          key={gradient}
          aria-hidden="true"
          className={`block bg-linear-to-r ${gradient} bg-size-[170%_100%] bg-clip-text text-transparent transition-[opacity,background-position] duration-500 motion-reduce:transition-none ${
            index === 0 ? 'relative' : 'absolute inset-0'
          } ${
            index === activeTheme
              ? 'opacity-100 bg-position-[0%_50%]'
              : 'opacity-0 bg-position-[85%_50%]'
          }`}
        >
          {siteConfig.firstName} {siteConfig.lastName}
        </span>
      ))}
    </motion.h1>
  )
}
