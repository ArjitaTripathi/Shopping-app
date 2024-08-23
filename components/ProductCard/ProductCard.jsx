import React from 'react'
import style from './ProductCard.module.scss'
import Shirt from '../../public/images/photos/shirt.webp'
import Star from '../../public/images/icons/star-7207.svg'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard = () => {
  return (
      <div className={style.product}>
        <Link href='/product/1' className='link'>
          <div className={style.productImage}>
            <Image src={Shirt} alt="Shirt" height="300" width="260"/>
          </div>
          <div className={style.productDetails}>
              <span className={style.ItemName}>T-shirt with Strips</span>
              <div className={style.rating}>
                <Image src={Star} alt='Star' height="20" width="20"/>
                <Image src={Star} alt='Star' height="20" width="20"/>
                <Image src={Star} alt='Star' height="20" width="20"/>
                <Image src={Star} alt='Star' height="20" width="20"/>
                <span>4/5</span>
              </div>
              <div className={style.productPrice}>$120</div>
          </div>
        </Link>
      </div>
  )
}

export default ProductCard
