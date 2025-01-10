import { useEffect, useMemo, useState } from 'react'

import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import { Hex } from 'viem'

import { numberUtils, web3Utils } from 'utils'

import { UseWalletReturnProps } from './useWallet.props'

export const useWallet = (): UseWalletReturnProps => {
  const { primaryWallet } = useDynamicContext()
  const [balance, setBalance] = useState<string | null>(null)

  const formattedBalance = useMemo(() => (
    numberUtils.formatCryptoView(Number(balance))
  ), [balance])

  const formattedAddress = useMemo(() => (
    web3Utils.formatWalletAddress(primaryWallet?.address)
  ), [primaryWallet?.address])

  useEffect(() => {
    if (!primaryWallet) return

    const fetchBalance = async () => {
      const walletBalance = await primaryWallet?.getBalance()

      if (walletBalance) {
        setBalance(walletBalance)
      }
    }

    fetchBalance()
  }, [primaryWallet])

  return {
    balance,
    formattedBalance,
    formattedAddress,
    address: primaryWallet?.address as Hex ?? null,
  }
}
