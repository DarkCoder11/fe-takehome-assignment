import { createBrowserRouter } from 'react-router-dom'

import { ROUTE_PATHS } from 'const'
import {
  Dashboard,
  Transactions,
} from 'containers'

export const router = createBrowserRouter([
  {
    path: ROUTE_PATHS.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: ROUTE_PATHS.TRANSACTIONS,
    element: <Transactions />,
  },
], {
  future: {
    v7_relativeSplatPath: true,
  },
})
