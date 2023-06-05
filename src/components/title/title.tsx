import './title.scss'

type TitlePropsType = {
  title: string
  cn?: string
}

export default function Title({cn, title}: TitlePropsType): JSX.Element {
  return (
    <h1 className={`${cn} title`}>{title}</h1>
  )
}
