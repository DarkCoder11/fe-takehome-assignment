import { useTransactionCount } from 'wagmi'

import { useWallet } from 'hooks'
import { PrivateLayout } from 'layouts'

export const Transactions = () => {
  const { address } = useWallet()
  const { data: transactionCount, isLoading: isTransactionCountLoading } = useTransactionCount({
    address: address!,
    query: {
      enabled: !!address,
    },
  })

  return (
    <PrivateLayout routeKey='TRANSACTIONS'>
      {!isTransactionCountLoading && (
        <h3 className='tw-text-xl'>
          {transactionCount && transactionCount > 0
            ? (
              <span className='tw-flex tw-gap-8'>
                📊 Total Transactions:
                <b>{transactionCount}</b>
              </span>
            )
            : '🚫 No transactions have been made yet.'}
        </h3>
      )}
    </PrivateLayout>
  )
}
