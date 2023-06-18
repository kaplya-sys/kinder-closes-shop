import { ReactNode } from 'react'
import Head from 'next/head'
import { Comfortaa } from 'next/font/google'
import { Providers } from '@/redux/providers'
import './globals.scss'

const comfortaa = Comfortaa(
  {
    subsets: ['latin'],
    style: ['normal'],
    weight: ['400', '700'],
    display: 'swap'
  }
)

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html className="page" lang="ru">
      <Head>
        <meta charSet="utf-8" />
        <meta name="robot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
      </Head>
      <body className={`page__page-body page-body ${comfortaa.className}`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
