import type { RouteObject } from 'react-router-dom'

import { StageLayout } from '../layout/StageLayout'
import { CraftPage } from '../pages/craft/CraftPage'
import { HomePage } from '../pages/home/HomePage'
import { LightShadowPage } from '../pages/light-shadow/LightShadowPage'
import { RebornPage } from '../pages/reborn/RebornPage'
import { UnknownRoutePage } from './UnknownRoutePage'

export const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <StageLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'craft',
        element: <CraftPage />,
      },
      {
        path: 'light-shadow',
        element: <LightShadowPage />,
      },
      {
        path: 'reborn',
        element: <RebornPage />,
      },
      {
        path: '*',
        element: <UnknownRoutePage />,
      },
    ],
  },
]
