import { useEffect } from 'react'

import { toast } from 'react-toastify'
import { Hex } from 'viem'
import { useTransactionReceipt } from 'wagmi'

import { SendIcon } from 'assets'
import { Button, Input } from 'components'
import { useTransaction } from 'hooks'
import { PrivateLayout } from 'layouts'

export const Dashboard = () => {
  const transactionAction = useTransaction()
  const {
    data: transactionReceiptData,
    error: transactionReceiptError,
    isLoading: transactionReceiptLoading,
  } = useTransactionReceipt({
    query: {
      enabled: !!transactionAction?.txnHash,
    },
    hash: transactionAction?.txnHash!,
  })

  useEffect(() => {
    if (transactionAction?.txnHash && (transactionReceiptError || transactionReceiptData)) {
      toast(transactionReceiptError && !transactionReceiptData
        ? transactionReceiptError.message
        : 'Transaction Successful! Your funds are on their way 🎉', {
        type: transactionReceiptError ? 'error' : 'success',
      })
      transactionAction.setTxnHash(null)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps --- only setTxnHash state updater no need deps
  }, [transactionReceiptData, transactionReceiptError, transactionAction?.txnHash])

  const handleTransactionFormSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const address = formData.get('address') as Hex
    const amount = formData.get('amount') as string

    transactionAction?.sendTransaction(address, amount)
  }

  return (
    <PrivateLayout className='tw-flex tw-flex-col tw-gap-24' routeKey='DASHBOARD'>
      <form className='tw-flex tw-items-center tw-flex-col tw-gap-20' onSubmit={handleTransactionFormSubmit}>
        <Input
          required
          type='text'
          name='address'
          placeholder='Enter address'
          className='tw-rounded-full tw-p-14'
        />
        <Input
          required
          type='text'
          name='amount'
          placeholder='Enter amount'
          className='tw-rounded-full tw-p-14'
        />
        <Button
          type='submit'
          icon={<SendIcon />}
          label='Send transaction'
          className='tw-rounded-full tw-p-14 tw-gap-20'
          disabled={transactionAction?.isTransactionPending || transactionReceiptLoading}
        />

        {transactionAction?.txnHash && (
          <p className='tw-text-sm'>
            Pending transaction hash:
            {' '}
            <b>{transactionAction.txnHash}</b>
          </p>
        )}
      </form>
    </PrivateLayout>
  )
}
