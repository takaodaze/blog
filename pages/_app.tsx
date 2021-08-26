import '../styles/globals.css';
import type { AppProps } from 'next/app';

export default function I_AM({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
