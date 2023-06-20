import Locator from 'public/locator.svg'
import Watch from 'public/watch.svg'
import Phone from 'public/phone.svg'
import Link from 'next/link'
import Logo from '../logo/logo'
import Search from '../search/search'
import NavDropdaown from '../nav-dropdown/nav-dropdown'
import NavMenu from '../nav-menu/nav-menu'
import UserMenu from '../user-menu/user-menu'
import { getCategoryList, getNavMenuList } from '@/services/siteComponentsService'
import { LinkComponentType } from '@/types/siteComponentsType'
import './header.scss'

export default async function Header(): Promise<JSX.Element> {
  const navMenuData = await getNavMenuList() as Array<LinkComponentType>
  const categoryData = await getCategoryList() as Array<LinkComponentType>

  return (
    <header className="header">
      <div className="container">
        <div className="header__site-inner">
          <Logo cn="header__logo" />
          <ul className="header__header-contacts header-contacts">
            <li className="header-contacts__item">
              <address className="header-contacts__address">
                <Locator className="header-contacts__icon" aria-labelledby="locatorID">
                  <title id="locatortID">Локация.</title>
                </Locator>
                Санкт-Петербург, ул. Большая Конюшенная, д. 19
              </address>
            </li>
            <li className="header-contacts__item">
              <div className="header-contacts__schedule">
                <Watch className="header-contacts__icon" aria-labelledby="watchID">
                  <title id="watchID">Часики.</title>
                </Watch>
                <span className="header-contacts__schedule-text">10:00 – 22:00, пн/сб</span>
              </div>
            </li>
            <li className="header-contacts__item">
              <Link className="header-contacts__link" href="tel:89999999999">
                <Phone className="header-contacts__icon" aria-labelledby="phoneID">
                  <title id="phoneID">Телефонная трубка.</title>
                </Phone>
                +7 (999)-999-99-99
              </Link>
            </li>
          </ul>
          <UserMenu cn="header__user-menu" />
        </div>
        <div className="header__nav-inner">
          <nav className="header__header-nav">
            <NavDropdaown cn="header-nav__dropdown" categoryList={categoryData} />
            <NavMenu cn="header-nav__nav-menu" menuList={navMenuData} />
          </nav>
          <Search />
        </div>
      </div>
    </header>
  )
}