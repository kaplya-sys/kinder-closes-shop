import Link from 'next/link'
import Watch from 'public/watch.svg'
import Phone from 'public/phone.svg'
import Title from '../ui/title/title'
import './our-contacts.scss'

export default function OurContacts(): JSX.Element {
  return (
    <section className="our-contacts">
      <Title cn="our-contacts__title">Наши контакты</Title>
      <div className="our-contacts__wrapper">
        <div className="our-contacts__market-info">
          <div className="our-contacts__address-wrapper">
            <address className="our-contacts__address">Санкт-Петербург, ул. Большая Конюшенная, д. 19</address>
            <div className="our-contacts__schedule">
              <p className="our-contacts__schedule-title">Часы работы магазина</p>
              <Watch className="our-contacts__schedule-icon" aria-labelledby="watchID">
                <title id="watchID">Часики</title>
              </Watch>
              <span className="our-contacts__schedule-days">пн-сб:</span>
              <span className="our-contacts__schedule-time">08:00-19:00</span>
              <span className="our-contacts__schedule-days">вс:</span>
              <span className="our-contacts__schedule-time">09:00-17:00</span>
            </div>
            <Link className="our-contacts__phone" href="tel:8552910562">
              <Phone className="our-contacts__phone-icon" aria-labelledby="phoneID">
                <title id="phoneID">Телефонная трубка</title>
              </Phone>
              +7 (552) 91-05-62
            </Link>
          </div>
          <Link className="our-contacts__link" href="">Заказать доставку</Link>
        </div>
        <iframe
          className="our-contacts__location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.5989428319008!2d30.320508377278575!3d59.93879686208739!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4696310fca5ba729%3A0xea9c53d4493c879f!2z0JHQvtC70YzRiNCw0Y8g0JrQvtC90Y7RiNC10L3QvdCw0Y8g0YPQuy4sIDE5LCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsywgMTkxMTg2!5e0!3m2!1sru!2sru!4v1686220759951!5m2!1sru!2sru"
          width="656"
          height="585"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          title="Расположение магазина «Мерри»."
        >
        </iframe>
      </div>
    </section>
  )
} 