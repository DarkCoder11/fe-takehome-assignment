import { HelmetProps } from 'react-helmet'

import { AppFavicon } from 'assets'

export const TITLE_DIVIDER = ' | '

export const HEADER_LINKS: Required<HelmetProps>['link'] = [
  {
    rel: 'icon',
    type: 'image/png',
    href: AppFavicon,
    sizes: '64x64',
  },
]

export const PAGE_TITLES = {
  dashboard: 'Dashboard',
  transactions: 'Transactions',
}
