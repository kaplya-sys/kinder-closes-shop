'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { LinkComponentType } from '@/types/siteComponentsType'
import './nav-menu.scss'

type NavMenuPropsType = {
  menuList: Array<LinkComponentType>
  cn?: string
}

export default function NavMenu({ cn, menuList }: NavMenuPropsType): JSX.Element {
  const path = usePathname()

  return (
    <ul className={`${cn} nav-menu`}>
      {menuList.map(item => {
        const { id, title, pathRef } = item
        
        return (
          <li className="nav-menu__item" key={id}>
            <Link
              className={`nav-menu__link ${path === pathRef ? 'nav-menu__link--active' : ''}`}
              href={pathRef}
            >
              {title}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
