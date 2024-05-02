'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PropsWithChildren, useState } from 'react'
import { Toaster } from 'sonner'

export function Providers({ children }: PropsWithChildren) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false
				}
			}
		})
	)

	return (
		<QueryClientProvider client={client}>
			<Providers>
				{children}

				<Toaster
					theme='dark'
					position='bottom-right'
					duration={1500}
				/>
			</Providers>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}
