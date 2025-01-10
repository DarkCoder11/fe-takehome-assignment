import cx from 'classnames'

import { CloseIcon } from 'assets'
import { Button } from 'components/Button'
import { List } from 'components/List'
import { NavLink } from 'components/NavLink'

import { MobileNavProps } from './MobileNav.props'

export const MobileNav = ({
  items,
  isOpen,
  onClose,
}: MobileNavProps) => {
  if (!isOpen) {
    return null
  }

  return (
    <div className={cx(
      'tw-flex tw-flex-col tw-fixed tw-top-0 tw-left-0 tw-w-full tw-h-full tw-bg-white tw-z-[1000]',
      'l:tw-hidden',
    )}
    >
      <div className='tw-flex tw-items-center tw-justify-end tw-m-5 tw-p-8'>
        <Button
          onClick={onClose}
          variant='secondary'
          icon={<CloseIcon />}
          className={cx(
            'tw-flex tw-items-center tw-justify-center tw-w-16 tw-h-16',
            'tw-bg-transparent tw-border-none tw-cursor-pointer',
          )}
        />
      </div>

      <div className='tw-flex tw-flex-col tw-flex-1 tw-gap-4 tw-p-5 tw-overflow-y-auto'>
        <List
          items={items}
          className='tw-flex-col tw-gap-40 tw-p-24'
          render={(item) => (
            <NavLink
              to={item.to}
              icon={item.icon}
              onClick={item.onClick}
              className={cx(
                'tw-flex tw-items-center tw-gap-8 tw-p-3 tw-rounded-md hover:tw-bg-gray-100',
                item.className,
              )}
            >
              <span>
                {item.children}
              </span>
            </NavLink>
          )}
        />
      </div>
    </div>
  )
}
