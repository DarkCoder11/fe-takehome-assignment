import { MobileNavProps } from 'components/MobileNav'

export interface HeaderProps {
  className?: string
  mobileNavItems: MobileNavProps['items']
  onSearch: (value: string) => void
}
