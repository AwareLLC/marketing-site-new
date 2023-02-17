import 'focus-visible'
import { useEffect } from 'react';
import '@/styles/tailwind.css'
import ReactGA from 'react-ga';
import { useRouter } from 'next/router';
import { initGA } from '../helpers/analytics';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
console.log('here')
    if (!window.GA_INITIALIZED) {
console.log('YAY')
      initGA('G-6DXFBF1RMT');
      window.GA_INITIALIZED = true;
    }
console.log(window.GA_INITIALIZED)
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
  }, [router.pathname]);


  return <Component {...pageProps} />
}
