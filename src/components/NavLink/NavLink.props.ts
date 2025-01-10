import { ReactNode } from 'react'

import { NavLinkProps as RouterNavLinkProps } from 'react-router-dom'

export type NavLinkProps = {
  to?: string
  icon?: ReactNode
  className?: string
  activeClassName?: string
  children: ReactNode
  isLighter?: boolean
  exact?: RouterNavLinkProps['end']
} & Partial<NavLinkCallbacks>

export type NavLinkCallbacks = Required<Pick<
RouterNavLinkProps,
| 'onClick'
>>
