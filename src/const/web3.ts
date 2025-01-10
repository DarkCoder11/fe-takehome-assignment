import { EthereumWalletConnectors } from '@dynamic-labs/ethereum'
import { http } from 'viem'
import { mainnet, sepolia } from 'viem/chains'
import { createConfig } from 'wagmi'

export const WAGMI_CONFIG = createConfig({
  chains: [mainnet, sepolia],
  multiInjectedProviderDiscovery: false,
  transports: {
    [mainnet.id]: http(),
    [sepolia.id]: http(),
  },
})

export const DYNAMIC_SETTINGS = {
  environmentId: process.env.DYNAMIC_SDK_ENV_ID,
  walletConnectors: [EthereumWalletConnectors],
}
