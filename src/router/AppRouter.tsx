import { useMemo } from 'react'
import { RouterProvider, createHashRouter } from 'react-router-dom'

import { appRoutes } from './routes'

export function AppRouter() {
  const router = useMemo(() => createHashRouter(appRoutes), [])

  return <RouterProvider router={router} />
}
