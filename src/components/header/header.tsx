import Logo from '../logo/logo'
import Search from '../search/search'
import NavDropdown from '../nav-dropdown/nav-dropdown'
import NavMenu from '../nav-menu/nav-menu'
import UserMenu from '../user-menu/user-menu'
import HeaderContacts from '../header-contacts/header-contacts'
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
          <HeaderContacts cn="header__header-contacts" />
          <UserMenu cn="header__user-menu" />
        </div>
        <div className="header__nav-inner">
          <nav className="header__header-nav">
            <NavDropdown cn="header-nav__dropdown" categoryList={categoryData} />
            <NavMenu cn="header-nav__nav-menu" menuList={navMenuData} />
          </nav>
          <Search />
        </div>
      </div>
    </header>
  )
}