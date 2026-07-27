import { useState } from 'react'
import type { FormEvent } from 'react'
import { Info, Send } from 'lucide-react'
import { submitContactMessage } from '../../lib/contact'

type FieldErrors = Partial<Record<'name' | 'email' | 'message', string>>

type Status =
  | { kind: 'idle' }
  | { kind: 'submitting' }
  | { kind: 'success' }
  | { kind: 'not-configured' }
  | { kind: 'error' }

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// 16px on touch widths — smaller input fonts trigger iOS keyboard zoom.
const inputClasses =
  'w-full rounded-lg border border-line bg-white px-4 py-3 text-base sm:text-sm text-ink placeholder:text-muted/60 shadow-soft transition-colors focus:border-accent-purple/50'

export function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>({ kind: 'idle' })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = String(data.get('name') ?? '').trim()
    const email = String(data.get('email') ?? '').trim()
    const message = String(data.get('message') ?? '').trim()

    const nextErrors: FieldErrors = {}
    if (!name) nextErrors.name = 'Please enter your name.'
    if (!email) nextErrors.email = 'Please enter your email address.'
    else if (!EMAIL_PATTERN.test(email)) nextErrors.email = 'Please enter a valid email address.'
    if (!message) nextErrors.message = 'Please write a short message.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus({ kind: 'submitting' })
    const result = await submitContactMessage({ name, email, message })
    if (result.ok) {
      setStatus({ kind: 'success' })
      form.reset()
    } else {
      setStatus({ kind: result.reason === 'not-configured' ? 'not-configured' : 'error' })
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div>
        <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-ink">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'contact-name-error' : undefined}
          className={inputClasses}
          placeholder="Your name"
        />
        {errors.name && (
          <p id="contact-name-error" className="mt-1.5 text-sm text-red-600">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'contact-email-error' : undefined}
          className={inputClasses}
          placeholder="you@example.com"
        />
        {errors.email && (
          <p id="contact-email-error" className="mt-1.5 text-sm text-red-600">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-ink">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={`${inputClasses} resize-y`}
          placeholder="Tell me about the role, product or challenge…"
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1.5 text-sm text-red-600">
            {errors.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={status.kind === 'submitting'}
        className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-accent-purple to-accent-blue px-6 py-3 text-sm font-medium text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
      >
        <Send size={16} aria-hidden="true" />
        {status.kind === 'submitting' ? 'Sending…' : 'Send message'}
      </button>

      <div role="status" aria-live="polite">
        {status.kind === 'success' && (
          <p className="rounded-lg border border-line bg-accent-soft px-4 py-3 text-sm text-ink">
            Thanks — your message has been sent. I&rsquo;ll get back to you soon.
          </p>
        )}
        {status.kind === 'not-configured' && (
          <p className="flex items-start gap-2 rounded-lg border border-line bg-accent-soft px-4 py-3 text-sm text-ink">
            <Info size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-accent-purple" />
            <span>
              Form submission isn&rsquo;t connected yet — your message was not sent. Please reach
              me directly by email in the meantime.
            </span>
          </p>
        )}
        {status.kind === 'error' && (
          <p className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            Something went wrong while sending your message. Please try again or email me
            directly.
          </p>
        )}
      </div>
    </form>
  )
}
