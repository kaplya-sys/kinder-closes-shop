import Promotions from '@/components/promotions/promotions'
import Adventures from '@/components/adventures/adventures'
import Products from '@/components/products/products'
import Category from '@/components/category/category'

import './page.scss'
import PromoCard from '@/components/promo-card/promo-card'

const products = [
  {
    id: 1,
    title: 'Шапка «Совенок вязанные ушки»',
    price: 800,
    oldPrice: 650,
    imagePath: '/clothes/clothes-5.jpg',
    sale: true
  },{
    id: 1,
    title: 'Боди «Белое облачко»',
    price: 600,
    imagePath: '/clothes/clothes-6.jpg',
    sale: false
  },{
    id: 1,
    title: 'Пижама «желуди»',
    price: 1200,
    oldPrice: 600,
    imagePath: '/clothes/clothes-7.jpg',
    sale: true
  },
]

const promoList = [
  {
    title: 'Черная пятница на всю коллекцию!<br /><span className="promotions__addition">позволь себе больше</span>',
    imgPath: '/banner/banner-1.jpg',
    imgAlt: 'Малыш сидя на белом ковре, прикусил ложку. А вокруг него детские игрушки.',
  },
  {
    title: 'Оставьте заявку сегодня и получите скидку завтра!',
    imgPath: '/banner/banner-2.jpg',
    imgAlt: 'Двое подростков, мальчик и девочка, в прыжке.',
  },
  {
    title: 'Черная пятница на всю коллекцию!',
    imgPath: '/banner/banner-3.jpg',
    imgAlt: 'Малыш в белом костюме с рожками.',
  },
  {
    title: 'Черная пятница на всю коллекцию!',
    imgPath: '/banner/banner-4.jpg',
    imgAlt: 'Малыш сидит на стуле и целует грудничка в щеку.',
    cn: ''
  }
]

export default function Home() {
  return (
    <div className="container">
      <Promotions promoData={promoList} />
      <Adventures />
      <Category />
      <Products products={products} />
      <section className="" style={{position: 'relative'}}>
        <h2 className=""></h2>
        <PromoCard {...promoList[3]} />
      </section>
    </div>
  )
}
