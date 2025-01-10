import { Hex } from 'viem'

export type UseWalletReturnProps = {
  address: Hex | null
  balance: string | null
  formattedBalance: string
  formattedAddress: string
}
