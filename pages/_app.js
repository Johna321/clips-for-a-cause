// pages/_app.js (assuming it's directly under the 'pages' folder)
import '../src/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp;
