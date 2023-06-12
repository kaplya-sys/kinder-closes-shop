"use client"

import { FormEvent, useState } from 'react'
import Validation from '@/components/validation/validation'
import Input from '@/components/ui/input/input'

type ValuesType = {
  name: string
  email: string
  password: string
  repeatPassword: string
}

export default function SingUp(): JSX.Element {
  const [values, setValues] = useState<ValuesType>({
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  })

  const onChangeHandler = (e: FormEvent) => {
    const target = e.target as HTMLInputElement
    setValues({ ...values, [target.name]: target.value })
  }

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <Validation
      title="Регистрация"
      onSubmitHandler={onSubmitHandler}
      buttonTitle="Зарегистрироваться"
      text="Уже зарегистрированы?"
      linkText="Войти"
      linkHref="/auth/sing-in"
    >
      <Input
        cn="validation__input"
        type="text"
        name="name"
        value={values.name}
        placeholder="Логин"
        onChange={onChangeHandler}
      >
        Имя пользователя
      </Input>
      <Input
        cn="validation__input"
        type="email"
        name="email"
        value={values.email}
        placeholder="Email"
        onChange={onChangeHandler}
      >
        Электронная почта
      </Input>
      <Input
        cn="validation__input"
        type="password"
        name="password"
        value={values.password}
        placeholder="Пароль"
        onChange={onChangeHandler}
      >
        Пароль
      </Input>
      <Input
        cn="validation__input validation__input--repeat-password"
        type="password"
        name="repeatPassword"
        value={values.repeatPassword}
        placeholder="Повторите пароль"
        onChange={onChangeHandler}
      >
        Пароль еще раз
      </Input>
    </Validation>
  )
}