import { motion } from 'framer-motion'
import { ContactChannels } from '../components/contact/ContactChannels'
import { ContactForm } from '../components/contact/ContactForm'
import { PageHeader } from '../components/layout/PageHeader'
import { usePageTitle } from '../hooks/usePageTitle'
import { fadeUp, staggerChildren } from '../lib/motion'

export function ContactPage() {
  usePageTitle('Contact')

  return (
    <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
      <PageHeader
        title="Let’s build something meaningful."
        subtitle="Have a role, product or technical challenge that matches my experience? Let’s talk."
      />

      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="mt-16 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-14"
      >
        <motion.div variants={fadeUp}>
          <h2 className="font-display text-lg font-semibold text-ink">Reach me directly</h2>
          <div className="mt-5">
            <ContactChannels />
          </div>
        </motion.div>

        <motion.div variants={fadeUp}>
          <h2 className="font-display text-lg font-semibold text-ink">Send a message</h2>
          <div className="mt-5 rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
            <ContactForm />
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
