import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
       {/* Favicon */}
       <link rel="apple-touch-icon" sizes="180x180" href="../favicon_io/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="../favicon_io/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="../favicon_io/favicon-16x16.png"/>
        <link rel="manifest" href="../favicon_io/site.webmanifest"/>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}