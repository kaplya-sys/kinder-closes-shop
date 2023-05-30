import Link from 'next/link'
import Logo from '../logo/logo'
import Image from 'next/image'
import './header.scss'

export default function Header(): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header__site-inner">
          <Logo cn="header__logo" />
          <ul className="header__header-contacts header-contacts">
            <li className="header-contacts__item">
              <address className="header-contacts__address">
                <Image className="header-contacts__icon" src="/locator.svg" width={20} height={20} alt="" />
                Санкт-Петербург, ул. Большая Конюшенная, д. 19
              </address>
            </li>
            <li className="header-contacts__item">
              <div className="header-contacts__schedule">
                <Image className="header-contacts__icon" src="/watch.svg" width={20} height={20} alt="" />
                <span className="header-contacts__schedule-text">10:00 – 22:00, пн/сб</span>
              </div>
            </li>
            <li className="header-contacts__item">
              <Link className="header-contacts__link" href="tel:89999999999">
                <Image className="header-contacts__icon" src="/phone.svg" width={20} height={20} alt="" />
                +7 (999)-999-99-99
              </Link>
            </li>
          </ul>
          <ul className="header__user-menu user-menu">
            <li className="user-menu__item">
              <Link className="user-menu__link" href="/profile/basket">
                <Image className="user-menu__icon" src="/basket.svg" priority width={20} height={20} alt="Корзина." />
                <div className="user-menu__count">2</div>
                <div className="user-menu__price-wrapper">
                  <span className="user-menu__sum">Сумма заказа:</span> 
                  <span className="user-menu__price">440 000 ₽</span>
                </div>
              </Link>
            </li>
            <li className="user-menu__item">
              <Link className="user-menu__link" href="/profile">
                <Image className="user-menu__icon" src="/user.svg" priority width={20} height={20} alt="Пользователь." />
                Войти
              </Link>
            </li>
          </ul>
        </div>
        <div className="header__nav-inner">
          <nav className="header__header-nav">
            <div className="header-nav__dropdown header-nav__dropdown--closed">
              <ul className="header-nav__product-menu product-menu">
                <li className="product-menu__item">
                  <Link className="product-menu__link" href="/catalog/clothing">Одежда</Link>
                </li>
                <li className="product-menu__item">
                  <Link className="product-menu__link" href="/catalog/shoes">Обувь</Link>
                </li>
                <li className="product-menu__item">
                  <Link className="product-menu__link" href="/catalog/accessories">Аксессуары</Link>
                </li>
              </ul>
              <button className="product-menu__button" type="button">Каталог</button>
            </div>
            <ul className="header-nav__nav-menu nav-menu">
              <li className="nav-menu__item">
                <Link className="nav-menu__link" href="/services/promo">Акции</Link>
              </li>
              <li className="nav-menu__item">
                <Link className="nav-menu__link" href="/services/certificates">Сертификаты</Link>
              </li>
              <li className="nav-menu__item">
                <Link className="nav-menu__link" href="/services/delivery">Доставка и оплата</Link>
              </li>
              <li className="nav-menu__item">
                <Link className="nav-menu__link" href="/services/photo-gallery">Фотогалерея</Link>
              </li>
              <li className="nav-menu__item">
                <Link className="nav-menu__link" href="/services/about-us">О компании</Link>
              </li>
              <li className="nav-menu__item">
                <Link className="nav-menu__link" href="/services/contacts">Контакты</Link>
              </li>
            </ul>
          </nav>
          <form className="header__form-search form-search">
            <label className="form-search__label">
              <input className="form-search__field" type="text" placeholder="Искать товар на сайте" />
            </label>
            <button className="form-search__button" type="submit">Найти</button>
          </form>
        </div>
      </div>
    </header>
  )
}