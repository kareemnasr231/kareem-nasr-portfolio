import type { Technology } from '../../types/content'

interface TechIconProps {
  tech: Technology
  size?: number
  className?: string
}

/** Renders a simple-icons brand glyph. Decorative — name is exposed by the parent. */
export function TechIcon({ tech, size = 24, className }: TechIconProps) {
  return (
    <svg
      role="img"
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill={tech.color}
      className={className}
    >
      <path d={tech.iconPath} />
    </svg>
  )
}
