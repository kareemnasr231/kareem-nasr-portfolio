import { Hero } from '../components/home/Hero'
import { usePageTitle } from '../hooks/usePageTitle'

export function HomePage() {
  usePageTitle()
  return <Hero />
}
