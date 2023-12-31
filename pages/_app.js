import '@/styles/globals.scss';
import axios from 'axios';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Layout from '@/components/template/Layout/Layout';

// 기본 url 설정
axios.defaults.baseURL = 'https://www.themealdb.com/api/json/v1/1';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
	return (
		<QueryClientProvider client={queryClient}>
			<Layout>
				<Component {...pageProps} />
			</Layout>

			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}
