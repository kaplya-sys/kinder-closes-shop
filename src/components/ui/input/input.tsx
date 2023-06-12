import {FormEvent, ReactNode} from 'react'
import './input.scss'

type FieldPropsType = {
  children: ReactNode
  type: string
  name: string
  value: string
  placeholder: string
  onChange: (e: FormEvent<HTMLInputElement>) => void
  cn?: string
}

export default function Input({children, cn, ...props}: FieldPropsType): JSX.Element {
  return (
    <div className={`${cn} input`}>
      <label className="input__label">
        <span className="visually-hidden">{children}</span>
        <input className="input__field" {...props} />
      </label>
    </div>
  )
}
