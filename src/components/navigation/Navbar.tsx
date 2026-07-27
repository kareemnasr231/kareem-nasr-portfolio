import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, useReducedMotion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navItems } from '../../data/site'
import { MobileMenu } from './MobileMenu'

/**
 * On Home the nav floats transparently over the hero (the dark panel
 * reaches the top of the viewport, as in the reference) but stays
 * fixed while scrolling, gaining a translucent backdrop once the page
 * moves. On other routes it is a sticky translucent bar.
 */
export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(
    () => typeof window !== 'undefined' && window.scrollY > 8,
  )
  const { pathname } = useLocation()
  const reducedMotion = useReducedMotion()
  const overlay = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header
      className={
        overlay
          ? `fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
              scrolled || menuOpen
                ? 'border-b border-line/70 bg-surface/85 backdrop-blur-md'
                : 'border-b border-transparent'
            }`
          : 'sticky top-0 z-50 border-b border-line/70 bg-surface/85 backdrop-blur-md'
      }
    >
      <a
        href="#main"
        className="sr-only rounded-md bg-white px-4 py-2 text-sm font-medium text-ink shadow-soft focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50"
      >
        Skip to content
      </a>

      <nav aria-label="Main" className="relative mx-auto flex h-16 max-w-7xl items-center px-5 sm:px-8">
        <Link
          to="/"
          className="font-display text-xl font-bold tracking-tight text-ink"
          aria-label="Kareem Nasr — home"
        >
          kareem<span className="text-gradient">.</span>
        </Link>

        {/* Desktop links — centered across the bar, as in the reference */}
        <ul className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-2 md:flex">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `relative block px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive ? 'text-accent-purple' : 'text-muted hover:text-ink'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-indicator"
                        transition={
                          reducedMotion
                            ? { duration: 0 }
                            : { type: 'spring', stiffness: 380, damping: 32 }
                        }
                        className="absolute inset-x-4 -bottom-0.5 flex items-center"
                        aria-hidden="true"
                      >
                        <span className="h-px flex-1 rounded-full bg-accent-purple" />
                        <span className="ml-1 h-1 w-1 rounded-full bg-accent-purple" />
                      </motion.span>
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="ml-auto flex h-11 w-11 items-center justify-center rounded-lg border border-line bg-white text-ink shadow-soft md:hidden"
        >
          {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </nav>

      <MobileMenu open={menuOpen} onNavigate={() => setMenuOpen(false)} />
    </header>
  )
}
