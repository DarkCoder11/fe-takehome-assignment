import { PropsWithChildren } from 'react'

import { PageHelmetProps } from 'components'

export type PrivateLayoutProps = PropsWithChildren<{
  className?: string
}> & PageHelmetProps
