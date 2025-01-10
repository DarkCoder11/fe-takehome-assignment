import { NavLinkProps } from 'components/NavLink'

export type NavbarProps = {
  className?: string
  isOpen?: boolean
  items: NavbarItems
}

export type NavbarItem = NavLinkProps

export type NavbarItems = NavbarItem[]
