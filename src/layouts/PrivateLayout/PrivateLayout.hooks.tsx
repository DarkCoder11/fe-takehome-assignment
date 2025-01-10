import {
  DashboardIcon,
  TransactionsIcon,
} from 'assets'
import { ROUTE_PATHS } from 'const'

export const navItems = [
  {
    children: 'Dashboard',
    icon: <DashboardIcon />,
    to: ROUTE_PATHS.DASHBOARD,
  },
  {
    children: 'Transactions',
    icon: <TransactionsIcon />,
    to: ROUTE_PATHS.TRANSACTIONS,
  },
]
