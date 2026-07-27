import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export function NotFoundPage() {
  return (
    <section className="mx-auto flex max-w-6xl flex-col items-center px-5 py-28 text-center sm:px-8">
      <p className="font-mono text-sm text-accent-purple">404</p>
      <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-muted">
        The page you are looking for doesn&rsquo;t exist or may have been moved.
      </p>
      <Link
        to="/"
        className="mt-8 inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-purple/40 motion-reduce:transition-none"
      >
        <ArrowLeft size={16} aria-hidden="true" />
        Back to home
      </Link>
    </section>
  )
}
