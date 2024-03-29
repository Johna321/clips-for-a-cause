import { Amplify } from 'aws-amplify';
import * as Auth from 'aws-amplify/auth'
import * as API from 'aws-amplify/api'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryClient = new QueryClient();
const apiClient = API.generateClient();

import styles from '../src/styles/index.css';
import '../src/styles/globals.css';
import Header from '../src/components/Header'; // Header component
import Footer from '../src/components/Footer'; // Footer component

Amplify.configure({
    Auth: {
        Cognito: {
            userPoolId: "us-east-2_K5WvmDvSZ",
            userPoolClientId: "3otcfn4iolvm1occm14r1967fq",
        },
    },
    API: {
        GraphQL: {
            endpoint: `https://graphql.clipsforacause.org/v1/graphql`,
            defaultAuthMode: 'none',
        },
        REST: {
            public: {
                endpoint: `https://api.clipsforacause.org/public`,
            },
            auth: {
                endpoint: `https://api.clipsforacause.org/auth`,
            },
        },
    },
}, {
    API: {
        GraphQL: {
            headers: async () => {
                const jwtToken = (await Auth.fetchAuthSession()).tokens?.idToken?.toString();
                return { ...(jwtToken && { Authorization: `Bearer ${jwtToken}` }) };
            },
        },
        REST: {
            headers: async ({ apiName }) => apiName === 'auth' ? { Authorization: `Bearer ${(await Auth.fetchAuthSession()).tokens?.idToken?.toString()}` } : { 'X-Api-Key': '1' }
        }
    }
});

function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;

