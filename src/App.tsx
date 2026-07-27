import { MotionConfig } from 'framer-motion'
import { AppRouter } from './routes/AppRouter'

export default function App() {
  return (
    // reducedMotion="user" disables transform-based animations globally
    // when the visitor prefers reduced motion (opacity fades remain).
    <MotionConfig reducedMotion="user">
      <AppRouter />
    </MotionConfig>
  )
}
