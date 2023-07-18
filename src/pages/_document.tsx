import { Html, Head, Main, NextScript } from 'next/document'
import { ReduxProvider } from '@/redux/provider'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
       {/* <ReduxProvider><Main /></ReduxProvider>  */}
       <Main/>
        <NextScript />
      </body>
    </Html>
  )
}
