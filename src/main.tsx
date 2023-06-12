import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { Loader } from './components/ui/Loader.tsx'
import { App } from './App.tsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { SideBarResponsive } from './components/ui/mobileResponsive/SideBarResponsive.tsx'
import { Mobile } from './pages/mobileResponsive/Mobile.tsx'
import { Principal } from './Principal.tsx'


const client = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<QueryClientProvider client={ client }>
			<ReactQueryDevtools/>

				{/* <App/> */}

					<Principal/>
		</QueryClientProvider>
	</React.StrictMode>
)
