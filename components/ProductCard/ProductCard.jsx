import React from 'react'
import style from './ProductCard.module.scss'
import Shirt from '../../public/images/photos/shirt.webp'
import Image from 'next/image'

const ProductCard = () => {
  return (
    <div className={style.product}>
        <div className={style.productImage}>
            <Image src={Shirt} alt="Shirt" height="300" width="260"/>
        </div>
        <div className={style.productDetails}>
            <span className={style.ItemName}>T-shirt with Strips</span>
            <div className={style.rating}>****<span>4.5/5</span></div>
            <div className={style.productPrice}>$120</div>
        </div>
    </div>
  )
}

export default ProductCard
