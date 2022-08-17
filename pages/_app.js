import '../styles/globals.css';
import Default from '../layouts/Default';

function MyApp({ Component, pageProps }) {
  return (
    <Default>
      <Component {...pageProps} />
    </Default>
  );
}

export default MyApp;
