import Link from 'next/link'
import Image from 'next/image'
import './footer.scss'

export default function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer__footer-nav">
          <div className="footer__contacts">
            <h2 className="footer__title">Контакты</h2>
            <ul className="footer__contacts-list contacts-list">
              <li className="contacts-list__item">
                <Link className="contacts-list__link" href="tel:89999999999">+7 (999)-999-99-99</Link>
              </li>
              <li className="contacts-list__item">
                <Link className="contacts-list__link" href="mailto:cc@merry-child.ru">cc@merry-child.ru</Link>
              </li>
            </ul>
          </div>
          <div className="footer__social">
            <h2 className="footer__title">Мы в социальных сетях</h2>
            <ul className="footer__social-list social-list">
              <li className="social-list__item">
                <Link className="social-list__link" href="https://www.facebook.com/" target="_blank">
                  <Image className="social-list__icon" src="/social/facebook.svg" priority width={30} height={30} alt="Файсбук." />
                </Link>
              </li>
              <li className="social-list__item">
                <Link className="social-list__link" href="https://vk.com/" target="_blank">
                  <Image className="social-list__icon" src="/social/vk.svg" priority width={30} height={30} alt="Вконтакте." />
                </Link>
              </li>

              <li className="social-list__item">
                <Link className="social-list__link" href="https://twitter.com/" target="_blank">
                  <Image className="social-list__icon" src="/social/twitter.svg" priority width={30} height={30} alt="Твиттер." />
                </Link>
              </li>
              <li className="social-list__item">
                <Link className="social-list__link" href="https://www.instagram.com/" target="_blank">
                  <Image className="social-list__icon" src="/social/instagram.svg" priority width={30} height={30} alt="Инстаграм." />
                </Link>
              </li>
              <li className="social-list__item">
                <Link className="social-list__link" href="https://www.youtube.com/" target="_blank">
                  <Image className="social-list__icon" src="/social/youtube.svg" priority width={30} height={30} alt="Ютуб." />
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__services">
            <h2 className="footer__title">Дополнительно</h2>
            <ul className="footer__services-list services-list">
              <li className="services-list__item">
                <Link className="services-list__link" href="/services/about-us">О компании</Link>
              </li>
              <li className="services-list__item">
                <Link className="services-list__link" href="/services/working-conditions">Условия работы</Link>
              </li>
              <li className="services-list__item">
                <Link className="services-list__link" href="/services/photo-gallery">Фотогалерея</Link>
              </li>
              <li className="services-list__item">
                <Link className="services-list__link" href="/services/certificates">Сертификаты</Link>
              </li>
              <li className="services-list__item">
                <Link className="services-list__link" href="/services/requisites">Реквизиты</Link>
              </li>
              <li className="services-list__item">
                <Link className="services-list__link" href="/services/partners">Партнерам</Link>
              </li>
              <li className="services-list__item">
                <Link className="services-list__link" href="/services/agent">Амбасадорам</Link>
              </li>
              <li className="services-list__item">
                <Link className="services-list__link" href="/services/bloggers">Блогерам</Link>
              </li>
              <li className="services-list__item">
                <Link className="services-list__link" href="/services/news">Новости</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </footer>
  )
}