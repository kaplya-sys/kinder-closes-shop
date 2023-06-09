import {ReactNode} from 'react'
import './title.scss'

type TitlePropsType = {
  children: ReactNode
  cn?: string
}

export default function Title({cn, children}: TitlePropsType): JSX.Element {
  return (
    <h1 className={`${cn} title`}>{children}</h1>
  )
}
