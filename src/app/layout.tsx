import {ReactNode} from 'react'
import Head from 'next/head'
import {Comfortaa} from 'next/font/google'
import './globals.scss'

const comfortaa = Comfortaa(
  {
    subsets: ['latin'],
    style: ['normal'],
    weight: ['400', '700'],
    display: 'swap'
  }
)

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html className="page" lang="ru">
      <Head>
        <meta charSet="utf-8" />
        <meta name="robot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={`page__page-body page-body ${comfortaa.className}`}>
        {children}
      </body>
    </html>
  )
}
