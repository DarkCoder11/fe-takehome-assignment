import { useCallback } from 'react'

import { toast } from 'react-toastify'

import { CopyIcon } from 'assets'
import { Button } from 'components/Button'
import { useWallet } from 'hooks'
import { actionUtils } from 'utils'

export const WalletDetails = () => {
  const { balance, formattedBalance, address, formattedAddress } = useWallet()

  const handleAddressCopy = useCallback(async () => {
    if (!address) return

    const succeed = await actionUtils.copyToClipboard(address)

    toast(succeed ? 'Wallet address copied to clipboard' : "Couldn't copy wallet address", {
      type: succeed ? 'info' : 'warning',
    })
  }, [address])

  if (!formattedAddress || !balance) return null

  return (
    <div>
      <div className='tw-flex tw-gap-4 tw-items-center'>
        <p className='tw-flex tw-text-sm tw-gap-8'>
          <span>Wallet Address:</span>
          <span className='tw-font-bold'>{formattedAddress}</span>
        </p>
        <Button variant='secondary' icon={<CopyIcon />} onClick={handleAddressCopy} />
      </div>
      <p className='tw-flex tw-text-sm tw-gap-8'>
        <span>Balance:</span>
        <span className='tw-font-bold'>{`${formattedBalance} ETH`}</span>
      </p>
    </div>
  )
}
