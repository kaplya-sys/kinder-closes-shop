'use client'

import { FormEvent, useState } from 'react'
import { useLazySearchProductsQuery } from '@/redux/api/productsApi'
import './search.scss'

type SearchPropsType = {
  cn?: string
}

export default function Search({ cn }: SearchPropsType): JSX.Element {
  const [searchValue, setSearchValue] = useState<string>('')
  const [fetchProduct, {data}] = useLazySearchProductsQuery()

  const onChangeHandler = (e: FormEvent) => {
    const target = e.target as HTMLInputElement
    setSearchValue(target.value)
  }

  const onClickHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetchProduct(searchValue)
  }

  return (
    <form className={`${cn} form-search`} onClick={onClickHandler}>
      <label className="form-search__label">
        <input
          className="form-search__field"
          type="text" value={searchValue}
          placeholder="Искать товар на сайте"
          onChange={onChangeHandler}
        />
      </label>
      <button className="form-search__button" type="submit">Найти</button>
    </form>
  )
}