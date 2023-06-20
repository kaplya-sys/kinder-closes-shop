import Locator from 'public/locator.svg'
import Watch from 'public/watch.svg'
import Phone from 'public/phone.svg'
import Link from 'next/link'
import './header-contacts.scss'

type HeaderContactsPropsType = {
  cn?: string
}

export default function HeaderContacts({ cn }: HeaderContactsPropsType): JSX.Element {
  return (
    <ul className={`${cn} header-contacts`}>
      <li className="header-contacts__item">
        <address className="header-contacts__address">
          <Locator className="header-contacts__icon" aria-labelledby="locatorID">
            <title id="locatorID">Локация.</title>
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
  )
}
