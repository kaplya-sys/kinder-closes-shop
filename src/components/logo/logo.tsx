import Link from 'next/link'
import Image from 'next/image'
import './logo.scss'

type LogoPropsType = {
  cn?: string
}

export default function Logo({cn}: LogoPropsType): JSX.Element {
  return (
    <div className={`${cn} logo`}>
      <Link className="logo__link" href='/'>
        <Image className="logo__image" src="/logo.svg" priority width={94} height={27} alt="Логотип интернет-магазина Мерри."/>
      </Link>
    </div>
  )
}