import { Download } from 'lucide-react'
import { resumeConfig, socialLinks } from '../../data/site'
import { SocialIconLink } from '../ui/SocialIconLink'

interface SocialRailProps {
  direction?: 'vertical' | 'horizontal'
}

/**
 * Reference-style social navigation: LinkedIn, GitHub and Email as
 * circular buttons, a short divider, then the resume download as a
 * matching circular action. Vertical on the far left of the hero,
 * horizontal on small screens.
 */
export function SocialRail({ direction = 'vertical' }: SocialRailProps) {
  const vertical = direction === 'vertical'
  const tooltip = vertical ? 'right' : 'top'

  return (
    <nav
      aria-label="Social links and resume"
      className={
        vertical ? 'flex flex-col items-center gap-4' : 'flex items-center justify-center gap-4'
      }
    >
      {socialLinks.map((link) => (
        <SocialIconLink key={link.label} link={link} tooltip={tooltip} />
      ))}

      <span
        aria-hidden="true"
        className={vertical ? 'h-8 w-px bg-line' : 'h-px w-8 bg-line'}
      />

      {resumeConfig.available ? (
        <a
          href={resumeConfig.path}
          download
          aria-label="Download My Resume"
          className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-muted shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-purple/40 hover:text-accent-purple motion-reduce:transition-none motion-reduce:hover:translate-y-0"
        >
          <Download size={18} strokeWidth={1.75} aria-hidden="true" />
          <RailTooltip vertical={vertical} label="Download My Resume" />
        </a>
      ) : (
        <button
          type="button"
          disabled
          aria-label="Download My Resume — file not yet available"
          className="group relative flex h-11 w-11 cursor-not-allowed items-center justify-center rounded-full border border-line bg-white/70 text-muted/60 shadow-soft"
        >
          <Download size={18} strokeWidth={1.75} aria-hidden="true" />
          <RailTooltip vertical={vertical} label="Download My Resume" />
        </button>
      )}
    </nav>
  )
}

function RailTooltip({ vertical, label }: { vertical: boolean; label: string }) {
  return (
    <span
      role="tooltip"
      className={`pointer-events-none absolute z-10 rounded-md bg-ink px-2 py-1 font-mono text-[11px] whitespace-nowrap text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100 ${
        vertical ? 'top-1/2 left-full ml-3 -translate-y-1/2' : 'bottom-full left-1/2 mb-2 -translate-x-1/2'
      }`}
    >
      {label}
    </span>
  )
}
