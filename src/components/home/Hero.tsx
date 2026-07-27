import { motion, useReducedMotion } from 'framer-motion'
import { siteConfig, typedSentences } from '../../data/site'
import { useTypewriter } from '../../hooks/useTypewriter'
import { fadeUp, staggerChildren } from '../../lib/motion'
import { AnimatedName } from './AnimatedName'
import { CharacterFigure } from './CharacterFigure'
import { DarkShowcase } from './DarkShowcase'
import { SocialRail } from './SocialRail'
import { TypewriterLine } from './TypewriterLine'

/**
 * Reference-matched hero: large light identity section on the left,
 * dark navy technology section on the right, joined by an organic
 * S-curved divider (SVG clipPath in objectBoundingBox units, so it
 * scales with the panel). Below lg the sections stack: light first,
 * dark second, no curve.
 */
export function Hero() {
  const reducedMotion = useReducedMotion()
  const { text, sentenceIndex } = useTypewriter({
    sentences: typedSentences,
    enabled: !reducedMotion,
  })

  return (
    <section className="relative overflow-hidden bg-surface">
      {/* Organic curve for the dark panel's left edge */}
      <svg aria-hidden="true" className="absolute h-0 w-0">
        <defs>
          <clipPath id="hero-curve" clipPathUnits="objectBoundingBox">
            <path d="M0.20,0 C0.06,0.15 0.09,0.32 0.17,0.46 C0.25,0.60 0.26,0.66 0.19,0.80 C0.14,0.90 0.15,0.96 0.17,1 L1,1 L1,0 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* LIGHT SECTION */}
      <div className="relative lg:min-h-dvh lg:pr-[41%]">
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute -top-32 -left-24 h-130 w-130 rounded-full bg-[radial-gradient(closest-side,rgb(139_92_246/0.08),transparent)]" />
          <div className="absolute bottom-0 left-1/2 h-110 w-110 -translate-x-1/4 translate-y-1/3 rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.07),transparent)]" />
          <div className="bg-grain absolute inset-0 opacity-[0.04] mix-blend-multiply" />
        </div>

        {/* Vertical social rail, far left — starts level with the top of the character */}
        <div className="absolute top-[15%] left-6 z-10 hidden lg:block">
          <SocialRail direction="vertical" />
        </div>

        <div className="relative mx-auto flex max-w-2xl flex-col px-6 pt-24 pb-16 lg:min-h-dvh lg:justify-center lg:pt-20 lg:pb-12 lg:pl-16">
          {/* Character — the visual hero, floating above the identity */}
          <div className="flex w-full justify-center">
            <CharacterFigure />
          </div>

          {/* Identity — attached to the lower area of the illustration,
              overlapping its legs (never the face or torso) */}
          <motion.div
            variants={staggerChildren}
            initial={reducedMotion ? false : 'hidden'}
            animate="visible"
            className="relative z-10 -mt-10 flex flex-col items-center text-center lg:-mt-14 lg:items-start lg:text-left"
          >
            <motion.p variants={fadeUp} className="text-lg font-medium text-muted">
              {siteConfig.intro}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-2">
              <AnimatedName themeIndex={sentenceIndex} />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-4 font-mono text-lg font-medium text-ink/85 sm:text-xl"
            >
              {siteConfig.title}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-3">
              <TypewriterLine text={text} />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="mt-4 max-w-md text-[15px] leading-relaxed text-muted"
            >
              {siteConfig.description}
            </motion.p>
          </motion.div>

          {/* Horizontal social rail (mobile/tablet) */}
          <div className="mt-10 self-center lg:hidden">
            <SocialRail direction="horizontal" />
          </div>
        </div>
      </div>

      {/* DARK SECTION — curved panel on lg, stacked block below */}
      <div className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[46%] lg:[clip-path:url(#hero-curve)]">
        <DarkShowcase />
      </div>
    </section>
  )
}
