import React from 'react'
import style from './LandingPage.module.scss'
import { Header } from '@/components/Header/Header'
import mainImage from '../../public/images/photos/mainImage.png'
import Versace from '../../public/images/photos/versace.png'
import Gucci from '../../public/images/photos/gucci.png'
import Prada from '../../public/images/photos/prada.png'
import Zara from '../../public/images/photos/zara.png'
import cKlien from '../../public/images/photos/cklien.png'
import Casual from '../../public/images/photos/casual.png'
import Formal from '../../public/images/photos/formal.png'
import Gym from '../../public/images/photos/gym.png'
import Swim from '../../public/images/photos/swimsuit.png'
import Wedding from '../../public/images/photos/wedding.png'
import Party from '../../public/images/photos/party.png'
import Image from 'next/image'
import ProductCard from '@/components/ProductCard/ProductCard'
import TestimonialCard from '@/components/TestimonialCard/TestimonialCard'
import Footer from '@/components/Footer/Footer'

export const LandingPage = () => {
  return (
    <div className={style.mainContainer}>
      <Header/>
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
          <li><Image src={Versace} height="130" width="150"/></li>
          <li><Image src={Gucci} height="70" width="150"/></li>
          <li><Image src={Prada} height="200" width="150"/></li>
          <li><Image src={Zara} height="30" width="150"/></li>
          <li><Image src={cKlien} height="50" width="150"/></li>
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
            {/* <div className={style.gridSubContainer}> */}
              <div>
                <h2>Casual</h2>
                <Image 
                  src={Casual} 
                  alt='Casual'
                  layout='fill'
                  objectFit='contain'
                  // style={style.dressTypeImg}
                  style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-20%, -50%)' }}
                />
              </div>
              <div>
                <h2>Formal</h2>
                <Image 
                  src={Formal} 
                  alt='Casual'
                  layout='fill'
                  objectFit='cover'
                  style={{ position: 'absolute', top: '50%', left: '30%', transform: 'translate(-20%, -50%)' }}
                />
              </div>
              <div>
                <h2>Party</h2>
                <Image 
                  src={Party} 
                  alt='Casual'
                  layout='fill'
                  objectFit='cover'
                  style={{ position: 'absolute', top: '50%', left: '30%', transform: 'translate(-20%, -50%)' }}
                />
              </div>
              <div>
                <h2>Wedding</h2>
                <Image 
                  src={Wedding} 
                  alt='Casual'
                  layout='fill'
                  objectFit='cover'
                  style={{ position: 'absolute', top: '50%', left: '30%', transform: 'translate(-20%, -50%)' }}
                />
              </div>
              <div>
                <h2>Gym</h2>
                <Image 
                  src={Gym} 
                  alt='Casual'
                  layout='fill'
                  objectFit='contain'
                  style={{ position: 'absolute', top: '50%', left: '30%', transform: 'translate(-20%, -50%)' }}
                />
              </div>
              <div>
                <h2>Swim</h2>
                <Image 
                  src={Swim} 
                  alt='Casual'
                  layout='fill'
                  objectFit='contain'
                  style={{ position: 'absolute', top: '50%', left: '30%', transform: 'translate(-10%, -50%)' }}
                />
              </div>
            {/* </div> */}
          </div>
        </div>
      </section>
      <section className={style.section5}>
        <span className={style.subHeading}>OUR HAPPY CUSTOMERS</span>
        <div className={style.cards}>
          <TestimonialCard/>
          <TestimonialCard/>
          <TestimonialCard/>
        </div>
        <div className={style.newsLetter}>
          <span className={style.subHeading}> STAY UPTO DATE ABOUT <br/>OUR LATEST OFFERS</span>
          <div>
            <input type="email" name="email" placeholder="Enter your email address" />
            <button className={`${style.btn} outlineBtn`}>Subscribe to our newsletter</button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

