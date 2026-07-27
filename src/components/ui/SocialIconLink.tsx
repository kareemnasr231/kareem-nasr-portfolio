import type { SocialLink } from '../../types/content'

interface SocialIconLinkProps {
  link: SocialLink
  /** Which side the tooltip appears on. */
  tooltip?: 'right' | 'top'
}

const tooltipPosition = {
  right: 'left-full top-1/2 ml-3 -translate-y-1/2',
  top: 'bottom-full left-1/2 mb-2 -translate-x-1/2',
} as const

export function SocialIconLink({ link, tooltip = 'right' }: SocialIconLinkProps) {
  const Icon = link.icon

  return (
    <a
      href={link.href}
      aria-label={link.label}
      download={link.download}
      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-muted shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-purple/40 hover:text-accent-purple motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <Icon size={18} strokeWidth={1.75} aria-hidden="true" />
      <span
        role="tooltip"
        className={`pointer-events-none absolute z-10 rounded-md bg-ink px-2 py-1 font-mono text-[11px] whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 ${tooltipPosition[tooltip]}`}
      >
        {link.label}
      </span>
    </a>
  )
}
