"use client"

import { FormEvent, useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Validation from '@/components/validation/validation'
import Input from '@/components/ui/input/input'

export default function SingIn(): JSX.Element {
  const [values, setValues] = useState<{ email: string, password: string }>({ email: '', password: '' })
  const router = useRouter()

  const onChangeHandler = (e: FormEvent) => {
    const target = e.target as HTMLInputElement
    setValues({ ...values, [target.name]: target.value })
  }

  const onSubmitHandler = (e: FormEvent) => {
    e.preventDefault()
    router.push('/')
  }

  useEffect(() => {
    router.prefetch('/')
  }, [])

  return (
    <Validation
      title="Авторизация"
      onSubmitHandler={onSubmitHandler}
      buttonTitle="Войти"
      text="Ещё не зарегистрированы?"
      linkText="Зарегистрироваться"
      linkHref="/auth/sing-up"
    >
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
        cn="validation__input validation__input--password"
        type="password"
        name="password"
        value={values.password}
        placeholder="Password"
        onChange={onChangeHandler}
      >
        Пароль
      </Input>
    </Validation>
  )
}
