import type { ExperienceItem } from '../types/content'

export const experiencePage = {
  title: 'Engineering Journey',
  subtitle:
    'The education, experience and continuous learning that shaped me as a Software Engineer.',
}

/** Configurable — shown next to the Route Academy timeline node. */
export const TRAINING_YEAR = '2022'

/**
 * The engineering journey, in timeline order — real education, roles
 * and growth milestones only.
 */
export const experienceItems: readonly ExperienceItem[] = [
  {
    id: 'route-academy',
    title: 'Software Development Training',
    organization: 'Route Academy',
    role: 'Frontend & Backend Development · Mini ITI Program',
    period: TRAINING_YEAR,
    description:
      'Completed structured software development training covering frontend, backend and practical software engineering concepts through intensive, project-based learning.',
    highlights: [
      'Frontend Development',
      'Backend Development',
      'Mini ITI Program',
      'Practical projects',
      'Team collaboration',
    ],
    tags: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Git', 'REST APIs'],
  },
  {
    id: 'military-service',
    title: 'Completed Military Service',
    organization: 'Egyptian Armed Forces',
    role: 'Military Service',
    // Editable placeholder — exact dates intentionally not shown in the UI.
    period: 'Completed',
    description:
      'Successfully completed mandatory military service, strengthening discipline, responsibility, teamwork, adaptability and the ability to perform effectively under pressure.',
    tags: ['Discipline', 'Responsibility', 'Teamwork', 'Adaptability', 'Communication'],
  },
  {
    id: 'wtdcare',
    title: 'Software Engineer',
    organization: 'WTDcare',
    role: 'Software Engineer',
    period: 'Jan 2025 — Jun 2026',
    highlights: [
      'Built and maintained production software using React, TypeScript, Python, Django, GraphQL and PostgreSQL.',
      'Worked across the software development lifecycle, from understanding business requirements and evaluating alternatives to implementation, testing, deployment and production support.',
      'Used AI-assisted development tools to accelerate research, debugging, documentation and implementation while validating generated solutions before integrating them into production code.',
      'Applied software design principles and design patterns to keep business logic maintainable, reusable and easier to extend.',
      'Contributed to technical decision-making by comparing possible solutions, identifying trade-offs and selecting approaches that matched business requirements and the existing architecture.',
      'Worked with Docker, CI/CD workflows, environment configuration, deployment processes and production monitoring.',
      'Investigated and resolved complex issues involving permissions, localization, payments, notifications, data flows and system integration.',
      'Collaborated with technical and business stakeholders to turn complex requirements into reliable software solutions.',
    ],
    tags: [
      'React',
      'TypeScript',
      'Python',
      'Django',
      'GraphQL',
      'PostgreSQL',
      'Docker',
      'Git',
      'CI/CD',
      'Sentry',
      'AI-Assisted Development',
      'Design Patterns',
      'System Design',
    ],
  },
  {
    id: 'continuous-learning',
    title: 'Continuous Learning',
    role: 'Software Engineer',
    period: 'Present',
    description:
      'Continuously improving my engineering skills through hands-on projects, AI-assisted development, software architecture, system design and modern engineering practices.',
    highlights: [
      'AI-assisted development',
      'Design Patterns',
      'System Design',
      'Clean Architecture',
      'DevOps fundamentals',
      'Modern frontend and backend development',
    ],
    tags: ['AI', 'Architecture', 'Design Patterns', 'Docker', 'GraphQL', 'TypeScript', 'Python'],
  },
]
