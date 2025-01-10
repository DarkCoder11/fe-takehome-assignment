import { useCallback } from 'react'

import cx from 'classnames'
import { NavLink as RouterLink, NavLinkProps as RouterLinkProps } from 'react-router-dom'

import { NAV_LINK_TO_DEFAULT } from './NavLink.const'
import { NavLinkProps } from './NavLink.props'

export const NavLink = ({
  icon,
  onClick,
  children,
  exact = false,
  className = '',
  isLighter = false,
  activeClassName = '',
  to = NAV_LINK_TO_DEFAULT,
}: NavLinkProps) => {
  const handleClick = useCallback<Required<RouterLinkProps>['onClick']>((event) => {
    if (to === NAV_LINK_TO_DEFAULT) {
      event.stopPropagation()
      event.preventDefault()
    }

    onClick?.(event)
  }, [onClick, to])

  return (
    <RouterLink
      className={({ isActive }) => cx(
        'tw-w-full tw-outline-none',
        {
          'tw-text-inactiveColor hover:tw-text-primaryBlack': !isActive && !isLighter,
          'tw-text-primaryBlack': isActive,
          'tw-text-gray-400': isLighter,
        },
        className,
        isActive && activeClassName,
      )}
      to={to}
      end={exact}
      onClick={handleClick}
    >
      {icon}
      {children}
    </RouterLink>
  )
}
