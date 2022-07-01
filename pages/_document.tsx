import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html className='dark'>
      <Head />
      <body className='layout-bg'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}