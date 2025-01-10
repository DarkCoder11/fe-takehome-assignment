import { Address, Hash } from 'viem'

export type UseTransactionReturnProps = {
  txnHash: Hash | null
  isTransactionPending: boolean
  sendTransaction: (address: Address, amount: string) => void
  setTxnHash: React.Dispatch<React.SetStateAction<Hash | null>>
}
