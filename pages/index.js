import Head from 'next/head'

import Layout from '/components/Layout';
const Myapp = ({ children, title }) => {
  
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Layout/>
      </Head>

      <div></div>
     
      <main>{children}</main>
    </div>
  )
}

export default Myapp
