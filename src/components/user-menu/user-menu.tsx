'use client'

import Link from 'next/link'
import { useAppSelector } from '@/redux/hooks'
import { getOrderPrice } from '@/utils/getOrderPrice'
import Basket from 'public/basket.svg'
import User from 'public/user.svg'
import './user-menu.scss'

type UserMenuPropsType = {
  cn?: string
}

export default function UserMenu({ cn }: UserMenuPropsType): JSX.Element {
  const {basket} = useAppSelector(state => state.products)

  return (
    <ul className={`${cn} user-menu`}>
      <li className="user-menu__item">
        <Link className="user-menu__link" href="/profile/basket">
          <Basket className="user-menu__icon" aria-labelledby="basketID">
            <title id="basketID">Корзина</title>
          </Basket>
          {!!basket.length && <div className="user-menu__count">{basket.length}</div>}
          <div className="user-menu__price-wrapper">
            <span className="user-menu__sum">Сумма заказа:</span>
            <span className="user-menu__price">{getOrderPrice(basket)} ₽</span>
          </div>
        </Link>
      </li>
      <li className="user-menu__item">
        <Link className="user-menu__link" href="/auth/sing-in">
          <User className="user-menu__icon" aria-labelledby="userID">
            <title id="basketID">Пользователь</title>
          </User>
          Войти
        </Link>
      </li>
    </ul>
  )
}
