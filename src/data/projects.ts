import type { Project } from '../types/content'
import portfolioPreview from '../assets/projects/portfolio-preview.png'
import aiTeacherPreview from '../assets/projects/ai-teacher-preview.png'

export const projectsPage = {
  title: 'Projects',
  subtitle:
    'A selection of projects where I explored product thinking, software architecture, AI integration and user experience.',
}

export const projects: readonly Project[] = [
  {
    id: 'kareem-portfolio',
    title: 'Kareem Portfolio',
    description:
      'An interactive personal portfolio designed to present my experience, projects and engineering journey through clean visuals, motion and responsive interactions.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/kareemnasr231/kareem-nasr-portfolio',
    image: portfolioPreview,
    imageAlt: 'Screenshot of the Kareem Portfolio home page',
  },
  {
    id: 'ai-english-teacher',
    title: 'AI English Teacher',
    description:
      'An AI-powered English learning experience designed for conversation practice and intelligent feedback through a containerized software architecture.',
    technologies: ['Python', 'FastAPI', 'Ollama', 'Docker', 'Kubernetes'],
    githubUrl: 'https://github.com/kareemnasr231/vokabl-ai-teacher',
    image: aiTeacherPreview,
    imageAlt: 'Preview of the AI English Teacher conversation interface',
  },
]
