import React, { useState } from 'react'
import rightArrow from '../../../public/images/icons/right-arrow-svgrepo-com.svg'
import Shirt from '../../../public/images/photos/shirt.webp'
import Star from '../../../public/images/icons/star-7207.svg'
import Plus from '../../../public/images/icons/plus-large-svgrepo-com.svg'
import Minus from '../../../public/images/icons/minus-svgrepo-com.svg'
import Image from 'next/image'
import RatingReview from '@/components/RatingReview/RatingReview'
import Faq from '@/components/Faq/Faq'
import { BorderColors, DressSize, ProductDetailColors } from '@/util/constants'
import style from './productId.module.scss'
import ProductCard from '@/components/ProductCard/ProductCard'
import ProductDetails from '@/components/ProductDetails/ProductDetails'

const ProductDetail = () => {

  const [currentTab, setCurrentTab] = useState(0)
  const [quantity, setQuantity] = useState(0)

  const Tabs = [
    {
      Title: 'Product Details',
      Content: <ProductDetails/>
    },
    {
      Title: 'Rating & Reviews',
      Content: <RatingReview/>
    },
    {
      Title: 'FAQs',
      Content: <Faq/>
    }
  ]

  const IncrementQuantity = () => {
    let counter = quantity
    if(quantity < 10){
      setQuantity(counter+1)
    }
  }

  const DecrementQuantity = () => {
    let counter = quantity
    if(quantity > 0){
      setQuantity(counter-1)
    }
  }

  return (
    <div className={style.mainContainer}>
      <div className={style.productDetail}>
        <span className={style.location}>
          Home
          <Image src={rightArrow} alt="rightController" width="30" height="12" className={style.rightController}/>
          Shop
          <Image src={rightArrow} alt="rightController" width="30" height="12" className={style.rightController}/>
          Mens
          <Image src={rightArrow} alt="rightController" width="30" height="12" className={style.rightController}/>
          T-shirts
        </span>
        <div className={style.product}>
          <div className={style.productImage}>
              <div className={style.otherImagesOfProduct}>
                  <div className={style.smallerImg}><Image src={Shirt} alt="Shirt" height="100" width="100"/></div>
                  <div className={style.smallerImg}><Image src={Shirt} alt="Shirt" height="100" width="100"/></div>
                  <div className={style.smallerImg}><Image src={Shirt} alt="Shirt" height="100" width="100"/></div>
              </div>
              <div className={style.mainImage}><Image src={Shirt} alt="Shirt" height="300" width="260"/></div>
          </div>
          <div className={style.productInfo}>
              <h2>ONE LIFE GRAPHIC T-SHIRT</h2>
              <div className={style.rating}>
                <Image src={Star} alt='Star' height="20" width="20"/>
                <Image src={Star} alt='Star' height="20" width="20"/>
                <Image src={Star} alt='Star' height="20" width="20"/>
                <Image src={Star} alt='Star' height="20" width="20"/>
                <span>4/5</span>
              </div>
              <h3>$250</h3>
              <p className={style.productDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                  Corrupti, tenetur quo. Quibusdam, voluptatibus accusantium animi ipsum 
                  culpa dolorum beatae dolores.
              </p>
              <hr />
              <div className={style.colorDiv}>
                  <span>Select Colors</span>
                  <div className={style.colors}>
                      {
                          ProductDetailColors.map((color,index)=>{
                          return <span className={style.color} style={{backgroundColor:color,border:`1px solid ${BorderColors[index]}`}}/>
                          })
                      }
                  </div>
              </div>
              <hr />
              <div className={style.sizeDiv}>
                  <span>Select Sizes</span>
                  <div className={style.sizes}>
                    {
                        DressSize.map((size)=>{
                        return <span className={style.size}>{size}</span>
                        })
                    }
                  </div>
              </div>
              <hr />
              <div className={style.addBtnDiv}>
                <div className={style.quantityBtn}>
                  <button type="button" onClick={IncrementQuantity}>
                    <Image alt='increment' src={Plus}/>
                  </button>
                  <span>{quantity}</span>
                  <button type="button" onClick={DecrementQuantity}>
                    <Image alt='decrement' src={Minus}/>
                  </button>
                </div>
                <button type="button" className={`${style.add} btn`}>Add to Cart</button>
              </div>
          </div>
        </div>
      </div>
      <div className={style.tabsContainer}>
        <div className={style.tabsHeader}>
          {
            Tabs.map((tab,index)=>{
              return <span className={index === currentTab ? style.activeTab : style.title} onClick={() => setCurrentTab(index)}>{tab.Title}</span>
            })
          }
        </div>
        <div className={style.tabsContent}>
          {Tabs[currentTab].Content}
        </div>
      </div>
      <div className={style.similarProducts}>
        <span className={style.subHeading}>YOU MIGHT ALSO LIKE</span>
        <div className={style.productItems}>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
