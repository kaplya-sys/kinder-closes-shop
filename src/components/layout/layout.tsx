import { ReactNode } from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import './layout.scss'

export default function Layout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <>
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </>
  )
}
