import _toLower from 'lodash/toLower'
import { Helmet } from 'react-helmet'

import { HEADER_LINKS, PAGE_TITLES, TITLE_DIVIDER } from './PageHelmet.const'
import { PageHelmetProps } from './PageHelmet.props'

export const PageHelmet = ({
  routeKey,
}: PageHelmetProps) => {
  const pageTitle = PAGE_TITLES[_toLower(routeKey)]

  if (!pageTitle) {
    throw new Error(`'${routeKey}' title does not exist.`)
  }

  return (
    <Helmet
      title={`${pageTitle}${TITLE_DIVIDER}Web3`}
      link={HEADER_LINKS}
    />
  )
}
