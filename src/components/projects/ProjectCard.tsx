import { motion } from 'framer-motion'
import { fadeUp } from '../../lib/motion'
import type { Project } from '../../types/content'
import { GithubIcon } from '../ui/BrandIcon'
import { GlowCard } from '../ui/GlowCard'
import { Tag } from '../ui/Tag'
import { BrowserFrame } from './BrowserFrame'

interface ProjectCardProps {
  project: Project
}

/**
 * One project in the showcase. The ENTIRE card is a link to the GitHub
 * repository (new tab) with a subtle press animation; the GitHub icon
 * in the footer is decorative. Interaction (pointer glow, lift,
 * border/shadow) comes from the shared GlowCard.
 */
export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.a
      variants={fadeUp}
      whileTap={{ scale: 0.98 }}
      transition={{ scale: { duration: 0.18 } }}
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${project.title} — open the GitHub repository in a new tab`}
      className="block h-full rounded-2xl"
    >
      <GlowCard className="flex flex-col p-5 sm:p-6">
        <BrowserFrame project={project} />

        <div className="mt-5 flex flex-1 flex-col">
          <div className="flex items-start justify-between gap-4">
            <h2 className="font-display text-2xl font-semibold text-ink">{project.title}</h2>
            <span
              aria-hidden="true"
              className="mt-1 text-muted transition-colors duration-300 group-hover:text-accent-purple"
            >
              <GithubIcon size={20} />
            </span>
          </div>

          <p className="mt-2 text-sm leading-relaxed text-muted">{project.description}</p>

          <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
            {project.technologies.map((techName) => (
              <li key={techName}>
                <Tag label={techName} />
              </li>
            ))}
          </ul>
        </div>
      </GlowCard>
    </motion.a>
  )
}
