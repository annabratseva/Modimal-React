import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './app/App'

import { Provider } from "react-redux"
import { store } from './BLL/store'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

import { CardMetaProvider } from './shared/context/CardMetaContext'

const client = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CardMetaProvider>
      <QueryClientProvider client={client}>
        <Provider store={store}>
          <App />
        </Provider>
      </QueryClientProvider>
    </CardMetaProvider>
  </StrictMode>,
)
