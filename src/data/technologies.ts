import {
  siDjango,
  siDocker,
  siGit,
  siGraphql,
  siJavascript,
  siLinux,
  siPostgresql,
  siPython,
  siReact,
  siRedis,
  siTypescript,
} from 'simple-icons'
import type { TechOrbitRing, Technology } from '../types/content'

const tech = (icon: { title: string; path: string; hex: string }): Technology => ({
  name: icon.title,
  iconPath: icon.path,
  color: `#${icon.hex}`,
})

/** Brand colors are lifted where needed so every glyph reads on the dark panel. */
export const technologies = {
  react: tech(siReact),
  typescript: tech(siTypescript),
  javascript: tech(siJavascript),
  python: { ...tech(siPython), color: '#4B8BBE' },
  django: { ...tech(siDjango), color: '#44B78B' },
  graphql: tech(siGraphql),
  postgresql: { ...tech(siPostgresql), color: '#699ECA' },
  docker: tech(siDocker),
  git: tech(siGit),
  redis: tech(siRedis),
  linux: { ...tech(siLinux), color: '#D1D5DB' },
} satisfies Record<string, Technology>

/**
 * Reference-style orbit system: three concentric rings, each rotating
 * as a whole (alternating directions, different periods) with icons
 * spread at fixed angles. Icons counter-rotate so they stay upright.
 */
export const techOrbitRings: readonly TechOrbitRing[] = [
  {
    radius: 92,
    duration: 42,
    direction: 'cw',
    items: [
      { tech: technologies.react, angle: 0 },
      { tech: technologies.typescript, angle: 120 },
      { tech: technologies.python, angle: 240 },
    ],
  },
  {
    radius: 158,
    duration: 58,
    direction: 'ccw',
    items: [
      { tech: technologies.javascript, angle: 45 },
      { tech: technologies.django, angle: 135 },
      { tech: technologies.postgresql, angle: 225 },
      { tech: technologies.git, angle: 315 },
    ],
  },
  {
    radius: 224,
    duration: 76,
    direction: 'cw',
    items: [
      { tech: technologies.graphql, angle: 15 },
      { tech: technologies.docker, angle: 105 },
      { tech: technologies.redis, angle: 195 },
      { tech: technologies.linux, angle: 285 },
    ],
  },
]
