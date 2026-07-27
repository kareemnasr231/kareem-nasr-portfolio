import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, staggerChildren } from '../../lib/motion'

interface PageHeaderProps {
  title: string
  subtitle: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  const reducedMotion = useReducedMotion()

  return (
    <motion.header
      variants={staggerChildren}
      initial={reducedMotion ? false : 'hidden'}
      animate="visible"
      className="mx-auto max-w-2xl text-center"
    >
      <motion.h1
        variants={fadeUp}
        className="font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl"
      >
        {title}
      </motion.h1>
      <motion.p variants={fadeUp} className="mt-4 text-base leading-relaxed text-muted sm:text-lg">
        {subtitle}
      </motion.p>
    </motion.header>
  )
}
