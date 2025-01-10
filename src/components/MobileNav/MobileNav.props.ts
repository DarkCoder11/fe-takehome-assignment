import { NavbarItems } from 'components/Navbar'

export type MobileNavProps = {
  isOpen: boolean
  items: NavbarItems
  onClose: VoidFunction
  onSearch?: (value: string) => void
}
