import Header from '@/components/header/header'
import './globals.scss'
import {Comfortaa} from 'next/font/google'
import Footer from '@/components/footer/footer'

const comfortaa = Comfortaa(
  {
    subsets: ['latin'],
    style: ['normal'],
    weight: ['400', '700'],
    display: 'swap'
  }
)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className="page" lang="ru">
      <body className={`page__page-body page-body ${comfortaa.className}`}>
        <Header />
        <main className="page-body__main main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
