import {ReactNode} from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'


export default function Layout({children}: {children: ReactNode}): JSX.Element {
  return (
    <>
      <Header />
        {children}  
      <Footer />
    </>
  )
}
