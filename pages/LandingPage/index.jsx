import React from 'react'
import style from './landingPage.module.scss'
import mainImage from '../../public/images/photos/mainImage.png'
import Image from 'next/image'
import leftArrow from '../../public/images/icons/left-arrow-svgrepo-com.svg'
import rightArrow from '../../public/images/icons/right-arrow-svgrepo-com.svg'
import ProductCard from '@/components/ProductCard/ProductCard'
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard'
import { BrandImages, ClothesTypes } from '@/util/constants'

export const LandingPage = () => {
  return (
    <div className={style.mainContainer}>
      <section className={style.section1}>
        <div className={style.mainContainer}>
          <div className={style.mainText}>
            <span className={style.heading}>FIND CLOTHES<br/> THAT MATCHES <br/>YOUR STYLE</span>
            <span>Browse through our diverse ranage of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense of style.
            </span>
            <button className={`${style.btn} btn`}>Shop now</button>
            <div className={style.stats}>
              <div className={style.statCount}><span className={style.statNo}>200+</span><span>International Brands</span></div>
              <div className={style.verticaLine}></div>
              <div className={style.statCount}><span className={style.statNo}>2,000+</span><span>High-Quality Products</span></div>
              <div className={style.verticaLine}></div>
              <div className={style.statCount}><span className={style.statNo}>30,000+</span><span>Happy Customers</span></div>
            </div>
          </div>
          <div className={style.mainImg}>
            <Image 
              src={mainImage} 
              alt="couple in denim" 
              className={style.coupleImage}
            />
          </div>
        </div>
      </section>
      <div>
        <ul className={style.brandsName}>
          {
            BrandImages.map((brand)=>{
              return <li><Image src={brand.src} height={brand.height} width={brand.width}/></li>
            })
          }
        </ul>
      </div>
      <section className={style.section2}>
          <span className={style.subHeading}>NEW ARRIVALS</span>
          <div className={style.productItems}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
          <button className={`${style.btn} outlineBtn`}>View All</button>
      </section>
      <hr />
      <section className={style.section3}>
          <span className={style.subHeading}>TOP SELLING</span>
          <div className={style.productItems}>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
          <button className={`${style.btn} outlineBtn`}>View All</button>
      </section>
      <section className={style.section4}>
        <div className={style.dressTypes}>
          <span className={style.subHeading}>BROWSE BY DRESS STYLE</span>
          <div className={style.gridContainer}>
            {
              ClothesTypes.map(typeofCloth=>{
                return  (
                  <div>
                    <h2>{typeofCloth.name}</h2>
                    <Image 
                      src={typeofCloth.src} 
                      alt={typeofCloth.name}
                      layout='fill'
                      objectFit={typeofCloth.objectFit}
                      style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-40%, -50%)' }}
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
      </section>
      <section className={style.section5}>
        <span className={style.subHeading}>OUR HAPPY CUSTOMERS</span>
        <div className={style.controllers}>
          <Image src={leftArrow} alt="leftController" width="30" height="20" className={style.leftController}/>
          <Image src={rightArrow} alt="rightController" width="30" height="20" className={style.rightController}/>
        </div>
        <div className={style.cards}>
          <TestimonialCard/>
          <TestimonialCard/>
          <TestimonialCard/>
          <TestimonialCard/>
          <TestimonialCard/>
          <TestimonialCard/>
          <TestimonialCard/>
        </div>
      </section>
    </div>
  )
}

