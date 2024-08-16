import React from 'react'
import style from './Footer.module.scss'

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.newsLetter}>
          <span className={style.subHeading}> STAY UPTO DATE ABOUT <br/>OUR LATEST OFFERS</span>
          <div>
            <input type="email" name="email" placeholder="Enter your email address" />
            <button className={`${style.btn} outlineBtn`}>Subscribe to our newsletter</button>
          </div>
        </div>
    </div>
  )
}

export default Footer
