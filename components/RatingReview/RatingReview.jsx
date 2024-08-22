import React from 'react'
import TestimonialCard from '../TestimonialCard/TestimonialCard'
import style from './RatingReview.module.scss'

const RatingReview = () => {
  return (
    <div className={style.reviews}>
        <div className={style.cards}>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
            <TestimonialCard/>
        </div>
        <button type="button" className={`${style.btn} outlineBtn`}>View More Reviews</button>
    </div>
  )
}

export default RatingReview
