import React from 'react'
import Star from '../../public/images/icons/star-svg.svg'
import style from './TestimonialCard.module.scss'
import Image from 'next/image'

const TestimonialCard = () => {
  return (
    <div className={style.testimonialCard}>
        <div className={style.rating}>
          <Image src={Star} alt='Star' height="20" width="20"/>
          <Image src={Star} alt='Star' height="20" width="20"/>
          <Image src={Star} alt='Star' height="20" width="20"/>
          <Image src={Star} alt='Star' height="20" width="20"/>
          <span>4/5</span>
        </div>
        <h4>Maria L. </h4>
        <span className={style.text}>
            Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Assumenda maxime dicta praesentium soluta voluptate blanditiis
            consectetur corporis suscipit, consequatur sit quas iste ut
            molestiae accusamus autem! Nemo, a veniam!
        </span>
        <span className={style.date}>Posted on 24th Aug, 2024</span>
    </div>
  )
}

export default TestimonialCard
