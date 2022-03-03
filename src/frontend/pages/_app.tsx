import '../styles/globals.scss'
import Layout from './components/layouts'

export default function MyApp({ Component, pageProps }): JSX.Element {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

