import { useCallback, useState } from 'react'

import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import cx from 'classnames'
import { useLocation } from 'react-router-dom'

import { BurgerIcon, WalletIcon } from 'assets'
import { Button } from 'components/Button'
import { MobileNav } from 'components/MobileNav'
import { WalletDetails } from 'components/WalletDetails'

import { HeaderProps } from './Header.props'
import { formatPathname } from './Header.utils'

export const Header = ({
  className = '',
  mobileNavItems,
}: HeaderProps) => {
  const { pathname } = useLocation()
  const { setShowAuthFlow, user, handleLogOut } = useDynamicContext()

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)

  const handleWalletConnection = useCallback(() => {
    if (!user) {
      setShowAuthFlow(true)
      return
    }

    handleLogOut()
  }, [handleLogOut, setShowAuthFlow, user])

  return (
    <>
      <header
        className={cx(
          'tw-flex tw-items-center tw-w-full tw-py-20 tw-bg-white tw-border-b tw-border-gray max-xl:tw-px-[25px]',
          className,
        )}
      >
        <div className='tw-flex xl:tw-hidden tw-items-center tw-justify-between'>
          <Button
            variant='secondary'
            icon={<BurgerIcon />}
            onClick={() => setIsMobileNavOpen(true)}
            className='tw-flex tw-items-center tw-justify-center tw-w-18 tw-h-18 tw-p-2 tw-bg-transparent tw-border-none tw-cursor-pointer'
          />
        </div>

        <div className='tw-flex max-m:tw-flex-col tw-items-center tw-justify-between tw-w-full m:tw-px-40 tw-gap-20'>
          <h1 className='tw-text-secondaryHeading tw-text-[28px] tw-font-semibold tw-leading-[34px]'>
            {formatPathname(pathname)}
          </h1>
          <div className='tw-flex tw-flex-1 tw-justify-end max-m:tw-justify-center tw-items-center'>
            <div className='tw-flex tw-items-center tw-gap-30 max-m:tw-flex-col'>
              {user && <WalletDetails />}
              <Button
                variant='primary'
                icon={<WalletIcon />}
                onClick={handleWalletConnection}
                label={<span>{`${user ? 'Disconnect' : 'Connect'} Wallet`}</span>}
                className='tw-flex tw-items-center tw-justify-center tw-rounded-full tw-gap-8 tw-p-12'
              />
            </div>
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={isMobileNavOpen}
        items={mobileNavItems}
        onClose={() => setIsMobileNavOpen(false)}
      />
    </>
  )
}
