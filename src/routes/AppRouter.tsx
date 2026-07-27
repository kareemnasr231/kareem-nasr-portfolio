import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { RootLayout } from '../components/layout/RootLayout'
import { HomePage } from '../pages/HomePage'

/**
 * The Home page loads eagerly (it is the landing route / LCP target);
 * the remaining routes are code-split and fetched on navigation.
 */
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'experience',
        lazy: async () => ({
          Component: (await import('../pages/ExperiencePage')).ExperiencePage,
        }),
      },
      {
        path: 'projects',
        lazy: async () => ({
          Component: (await import('../pages/ProjectsPage')).ProjectsPage,
        }),
      },
      {
        path: 'contact',
        lazy: async () => ({
          Component: (await import('../pages/ContactPage')).ContactPage,
        }),
      },
      {
        path: '*',
        lazy: async () => ({
          Component: (await import('../pages/NotFoundPage')).NotFoundPage,
        }),
      },
    ],
  },
])

export function AppRouter() {
  return <RouterProvider router={router} />
}
