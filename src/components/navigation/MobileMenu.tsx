import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { navItems } from '../../data/site'
import { EASE_OUT } from '../../lib/motion'

interface MobileMenuProps {
  open: boolean
  /** Called when a link is activated, so the menu closes after navigation. */
  onNavigate: () => void
}

export function MobileMenu({ open, onNavigate }: MobileMenuProps) {
  const reducedMotion = useReducedMotion()

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          initial={reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
          animate={reducedMotion ? { opacity: 1 } : { opacity: 1, height: 'auto' }}
          exit={reducedMotion ? { opacity: 0 } : { opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: EASE_OUT }}
          className="overflow-hidden border-t border-line/70 bg-surface md:hidden"
        >
          <ul className="space-y-1 px-5 py-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.to === '/'}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    `flex items-center gap-2 rounded-lg px-4 py-3 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-accent-soft text-ink'
                        : 'text-muted hover:bg-white hover:text-ink'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {isActive && (
                        <span
                          className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-accent-purple to-accent-blue"
                          aria-hidden="true"
                        />
                      )}
                      {item.label}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
