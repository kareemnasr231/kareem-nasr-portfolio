import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Navbar } from '../navigation/Navbar'

export function RootLayout() {
  return (
    <div className="flex min-h-dvh flex-col">
      <Navbar />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <ScrollRestoration />
    </div>
  )
}
