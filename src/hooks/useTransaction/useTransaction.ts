import { useState } from 'react'

import { isEthereumWallet } from '@dynamic-labs/ethereum'
import { useDynamicContext } from '@dynamic-labs/sdk-react-core'
import { toast } from 'react-toastify'
import { Hash, parseEther } from 'viem'

import { UseTransactionReturnProps } from './useTransaction.props'

export const useTransaction = (): UseTransactionReturnProps | null => {
  const { primaryWallet } = useDynamicContext()

  const [txnHash, setTxnHash] = useState<Hash | null>(null)
  const [isTransactionPending, setIsTransactionPending] = useState<boolean>(false)

  if (!primaryWallet || !isEthereumWallet(primaryWallet)) return null

  const sendTransaction: UseTransactionReturnProps['sendTransaction'] = async (address, amount) => {
    if (!primaryWallet) return

    try {
      setIsTransactionPending(true)

      const walletClient = await primaryWallet.getWalletClient()
      const transaction = {
        to: address,
        value: amount ? parseEther(amount) : undefined,
      }
      const hash = await walletClient.sendTransaction(transaction)

      toast.info('Transaction Pending... Please wait while your transaction is being processed on the blockchain.')
      setTxnHash(hash)
      setIsTransactionPending(false)
    } catch (error) {
      toast.warn('Transaction Failed! Please check the address and amount, or ensure you did not reject the request.')
      setIsTransactionPending(false)
    }
  }

  return {
    txnHash,
    setTxnHash,
    sendTransaction,
    isTransactionPending,
  }
}
