import { motion } from 'framer-motion'
import { experienceItems } from '../../data/experience'
import { fadeUp, viewportOnce } from '../../lib/motion'
import { TimelineCard } from './TimelineCard'

/**
 * Vertical career timeline. Desktop: cards alternate around a center
 * line, dates sit beside their node. Mobile: a single left-hand line
 * with all cards on one side (dates move inside the cards).
 */
export function Timeline() {
  return (
    <div className="relative mt-16">
      {/* The line: left-aligned on mobile, centered from md up */}
      <div
        aria-hidden="true"
        className="absolute top-1 bottom-1 left-[1.05rem] w-px bg-linear-to-b from-accent-purple/40 via-line to-accent-blue/40 md:left-1/2 md:-translate-x-1/2"
      />

      <ol className="space-y-12 md:space-y-16">
        {experienceItems.map((item, index) => {
          const cardOnLeft = index % 2 === 0
          return (
            <motion.li
              key={item.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="relative grid grid-cols-[2.1rem_minmax(0,1fr)] items-start md:grid-cols-[minmax(0,1fr)_3.5rem_minmax(0,1fr)]"
            >
              {/* Node */}
              <span
                aria-hidden="true"
                className="absolute top-7 left-[1.05rem] flex -translate-x-1/2 md:top-8 md:left-1/2"
              >
                <span className="h-3.5 w-3.5 rounded-full bg-linear-to-br from-accent-purple to-accent-blue ring-4 ring-surface" />
              </span>

              {/* Date near the node (desktop only) */}
              <p
                className={`mt-7 hidden font-mono text-sm text-muted md:block ${
                  cardOnLeft
                    ? 'md:col-start-3 md:pl-2 md:text-left'
                    : 'md:col-start-1 md:row-start-1 md:pr-2 md:text-right'
                }`}
              >
                {item.period}
              </p>

              {/* Card */}
              <div
                className={`col-start-2 md:row-start-1 ${
                  cardOnLeft ? 'md:col-start-1' : 'md:col-start-3'
                }`}
              >
                <TimelineCard item={item} />
              </div>
            </motion.li>
          )
        })}
      </ol>
    </div>
  )
}
