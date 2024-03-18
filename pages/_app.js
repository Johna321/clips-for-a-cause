import '../src/styles/globals.css';
import Header from '../src/components/header'; // Header component
import Footer from '../src/components/footer'; // Footer component

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Component {...pageProps} />
    </>
  );
}

export default MyApp;
