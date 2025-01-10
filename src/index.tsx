import 'modern-css-reset'
import './styles/index.css'

import { StrictMode } from 'react'

import {
  DynamicContextProvider,
} from '@dynamic-labs/sdk-react-core'
import { DynamicWagmiConnector } from '@dynamic-labs/wagmi-connector'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { WagmiProvider } from 'wagmi'

import { WAGMI_CONFIG, DYNAMIC_SETTINGS } from 'const'

import { router } from './routes'

const queryClient = new QueryClient()

createRoot(
  document.getElementById('root')!,
).render(
  <StrictMode>
    <DynamicContextProvider settings={DYNAMIC_SETTINGS}>
      <WagmiProvider config={WAGMI_CONFIG}>
        <QueryClientProvider client={queryClient}>
          <DynamicWagmiConnector>
            <RouterProvider
              router={router}
              future={{
                v7_startTransition: true,
              }}
            />
            <ToastContainer theme='colored' limit={1} position='bottom-center' />
          </DynamicWagmiConnector>
        </QueryClientProvider>
      </WagmiProvider>
    </DynamicContextProvider>
  </StrictMode>,
)
