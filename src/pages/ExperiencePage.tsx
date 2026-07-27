import { PageHeader } from '../components/layout/PageHeader'
import { Timeline } from '../components/experience/Timeline'
import { experiencePage } from '../data/experience'
import { usePageTitle } from '../hooks/usePageTitle'

export function ExperiencePage() {
  usePageTitle('Engineering Journey')

  return (
    <section className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-24">
      <PageHeader title={experiencePage.title} subtitle={experiencePage.subtitle} />
      <Timeline />
    </section>
  )
}
