import { motion } from 'framer-motion'
import { PageHeader } from '../components/layout/PageHeader'
import { ProjectCard } from '../components/projects/ProjectCard'
import { projects, projectsPage } from '../data/projects'
import { usePageTitle } from '../hooks/usePageTitle'
import { staggerChildren } from '../lib/motion'

export function ProjectsPage() {
  usePageTitle('Projects')

  return (
    <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
      <PageHeader title={projectsPage.title} subtitle={projectsPage.subtitle} />

      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="mt-16 grid gap-8 md:grid-cols-2"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </motion.div>
    </section>
  )
}
