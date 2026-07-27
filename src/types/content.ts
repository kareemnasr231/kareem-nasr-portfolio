import type { ComponentType } from 'react'

export interface IconProps {
  size?: number
  className?: string
  strokeWidth?: number
}

/** Shared shape for Lucide icons and custom brand icons. */
export type IconComponent = ComponentType<IconProps>

export interface SocialLink {
  label: string
  href: string
  icon: IconComponent
  /** Whether the link leaves the site and should open in a new tab. */
  external: boolean
  /** Marks a downloadable resource (e.g. the CV). */
  download?: boolean
}

export interface Technology {
  name: string
  /** SVG path data (24x24 viewBox) from simple-icons. */
  iconPath: string
  /** Brand color used to tint the icon. */
  color: string
}

export interface OrbitPoint {
  tech: Technology
  /** Position on the ring, in degrees. */
  angle: number
}

export interface TechOrbitRing {
  /** Ring radius in px (pre-scaling). */
  radius: number
  /** Seconds per full revolution of the ring. */
  duration: number
  direction: 'cw' | 'ccw'
  items: readonly OrbitPoint[]
}

export interface ExperienceItem {
  id: string
  title: string
  /** Company/organization — omitted for personal growth milestones. */
  organization?: string
  role: string
  /** Human-readable period. Keep editable placeholders when exact dates are unknown. */
  period: string
  description?: string
  highlights?: string[]
  tags: string[]
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: readonly string[]
  /** The whole card links here, opening in a new tab. */
  githubUrl: string
  /** Imported screenshot shown inside the browser-frame preview. */
  image: string
  imageAlt: string
}
