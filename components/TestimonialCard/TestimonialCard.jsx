import React from 'react'
import style from './TestimonialCard.module.scss'
import Star from '../../public/images/icons/star-svg.svg'

const TestimonialCard = () => {
  return (
    <div className={style.testimonialCard}>
        <span>*****</span>
        <h4>Maria L. </h4>
        <span className={style.text}>Lorem ipsum, dolor sit amet consectetur 
            adipisicing elit. Assumenda maxime dicta praesentium soluta voluptate blanditiis
            consectetur corporis suscipit, nostrum nemo aperiam cupiditate, necessitatibus itaque unde 
            provident temporibus, asperiores magni consequatur sit quas iste ut
            molestiae accusamus autem! Nemo, a veniam!</span>
    </div>
  )
}

export default TestimonialCard
