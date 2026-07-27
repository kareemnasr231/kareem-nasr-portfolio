import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../components/ui/BrandIcon'
import type { SocialLink } from '../types/content'

export const siteConfig = {
  intro: 'Hi, I’m',
  firstName: 'Kareem',
  lastName: 'Nasr',
  title: 'Software Engineer',
  description:
    'Software Engineer passionate about building scalable systems, writing clean and maintainable code, and leveraging AI to solve real-world problems. I enjoy turning complex ideas into reliable products that create meaningful impact.',
  email: 'kareemnasr126@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/kareem-nasr-2399b821b/',
  // TODO: confirm the GitHub URL.
  githubUrl: 'https://github.com/kareemnasr231',
}

/**
 * Gmail web compose, pre-addressed. Used instead of mailto: because
 * mailto silently does nothing on devices without a configured desktop
 * mail client — this opens a compose window in any browser.
 */
export const emailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`

export const resumeConfig = {
  /** Served from public/resume/kareem-nasr-resume.pdf */
  path: '/resume/kareem-nasr-resume.pdf',
  /**
   * The PDF exists at the path above. If it is ever removed, flip this
   * to false so the download renders visually disabled instead of
   * pointing at a missing file.
   */
  available: true,
} as const

/** The typewriter cycles through these exact sentences, in order. */
export const typedSentences: readonly string[] = [
  'From Cairo to the World.',
  'Building scalable systems.',
  'Built for traffic.',
  'Designed for growth.',
]

/** Content of the "Currently Exploring" terminal panel. */
export const exploringTerminal = {
  intro: 'Building something meaningful...',
  items: [
    'System Design',
    'Design Patterns',
    'AI-Assisted Development',
    'DevOps & CI/CD',
    'Scalable Web Applications',
    'Production Monitoring',
  ],
} as const

export interface NavItem {
  label: string
  to: string
}

export const navItems: readonly NavItem[] = [
  { label: 'Home', to: '/' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
]

export const socialLinks: readonly SocialLink[] = [
  {
    label: 'LinkedIn',
    href: siteConfig.linkedinUrl,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: 'GitHub',
    href: siteConfig.githubUrl,
    icon: GithubIcon,
    external: true,
  },
  {
    label: 'Email',
    href: emailComposeUrl,
    icon: Mail,
    external: true,
  },
]
