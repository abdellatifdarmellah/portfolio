import '@/styles/globals.css'
import { useState } from 'react'
import Layout from 'components/layout';

export default function App({ Component, pageProps }) {
  const [page, setPage] = useState('main');
  
  return <>
    <Layout setPage={setPage}>
      <Component page={page} {...pageProps} />
    </Layout>
  </> 
}
