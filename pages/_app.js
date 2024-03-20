import '../src/styles/globals.css';
import Header from '../src/components/Header'; // Header component
import Footer from '../src/components/Footer'; // Footer component

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Component {...pageProps} />
    </>
  );
}

export default MyApp;

