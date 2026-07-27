import { Mail } from 'lucide-react'
import { siteConfig } from '../../data/site'
import { GithubIcon, LinkedinIcon } from '../ui/BrandIcon'
import type { IconComponent } from '../../types/content'

interface Channel {
  label: string
  value: string
  href: string
  icon: IconComponent
  external: boolean
}

const channels: Channel[] = [
  {
    label: 'Email',
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: siteConfig.linkedinUrl,
    icon: LinkedinIcon,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'See my code on GitHub',
    href: siteConfig.githubUrl,
    icon: GithubIcon,
    external: true,
  },
]

export function ContactChannels() {
  return (
    <ul className="space-y-3">
      {channels.map((channel) => {
        const Icon = channel.icon
        return (
          <li key={channel.label}>
            <a
              href={channel.href}
              {...(channel.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex items-center gap-4 rounded-xl border border-line bg-white px-5 py-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-purple/30 hover:shadow-lift motion-reduce:transition-none motion-reduce:hover:translate-y-0"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent-purple">
                <Icon size={17} aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-medium text-ink">{channel.label}</span>
                <span className="block truncate font-mono text-xs text-muted">
                  {channel.value}
                </span>
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}
