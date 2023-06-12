import { FormEvent, ReactNode } from 'react'
import Link from 'next/link'
import './validation.scss'

type ValidationPropsType = {
  children: ReactNode
  onSubmitHandler: (e: FormEvent) => void
  title: string
  buttonTitle: string
  text: string
  linkText: string
  linkHref: string
}

export default function Validation(
  {
    children,
    onSubmitHandler,
    title, buttonTitle,
    text,
    linkText,
    linkHref
  }: ValidationPropsType): JSX.Element {
  return (
    <section className="validation">
      <div className="validation__content">
        <h1 className="validation__title">{title}</h1>
        <form className="validation__form" onSubmit={onSubmitHandler}>
          {children}
          <button className="validation__button" type="submit">{buttonTitle}</button>
          <p className="validation__text">{text} <Link className="validation__link" href={linkHref}>{linkText}</Link></p>
        </form>
      </div>
    </section>
  )
}
