'use client'

import { useState } from 'react'
import Link from 'next/link'
import { LinkComponentType } from '@/types/siteComponentsType'
import './nav-dropdown.scss'

type NavDropdownPropsType = {
  cn?: string
  categoryList: Array<LinkComponentType>
}

export default function NavDropdown({ cn, categoryList }: NavDropdownPropsType): JSX.Element {
  const [dropdownToggle, setDropdownToggle] = useState<boolean>(false)

  return (
    <div className={`${cn} dropdown ${dropdownToggle ? 'dropdown--opened' : 'dropdown--closed'}`}>
      <ul className="dropdown__menu">
        {categoryList.map(item => {
          const { id, title, pathRef } = item

          return (
            <li className="dropdown__item" key={id}>
              <Link className="dropdown__link" href={pathRef}>{title}</Link>
            </li>
          )
        })}
      </ul>
      <button className="dropdown__button" type="button" onClick={() => setDropdownToggle(!dropdownToggle)}>Каталог</button>
    </div>
  )
}