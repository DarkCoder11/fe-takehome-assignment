import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import cx from 'classnames'
import _noop from 'lodash/noop'

import { Header, PageHelmet, Navbar } from 'components'
import { useWallet } from 'hooks'

import { navItems } from './PrivateLayout.hooks'
import { PrivateLayoutProps } from './PrivateLayout.props'

export const PrivateLayout = ({
  className = '',
  routeKey,
  children,
}: PrivateLayoutProps) => {
  const { address } = useWallet()
  const { loadingNetwork, sdkHasLoaded } = useDynamicContext()

  return (
    <>
      <PageHelmet routeKey={routeKey} />
      <Navbar items={navItems} />
      <section className='tw-w-full'>
        <Header
          onSearch={_noop}
          mobileNavItems={navItems}
        />
        {!loadingNetwork && sdkHasLoaded && (
          <div className={cx('tw-container max-xl:tw-max-w-full', className)}>
            {address ? children : (
              <h2>
                Connect wallet to be able to send transaction & see your wallet details
              </h2>
            )}
          </div>
        )}
      </section>
    </>
  )
}
