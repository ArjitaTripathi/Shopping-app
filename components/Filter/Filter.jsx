import React from 'react'
import style from './Filter.module.scss'
import filter from '../../public/images/icons/filter-6535.svg'
import Image from 'next/image'
import { BorderColors, ClothesTypes, Colors, DressSize, DressStyle } from '@/util/constants'
// import { Slider } from 'antd'
import Slider from 'antd/lib/slider';

const Filter = () => {
  return (
    <div className={style.filter}>
      <div>
        <span className={style.filterHeading}>Filters</span>
        <Image src={filter} width="30" height="13"/>
        <div className={style.types}>
          {
            ClothesTypes.map(type=>{
              return <span className={style.type}>{type}</span>
            })
          }
        </div>
      </div>
      <hr />
      <div>
        <span className={style.filterHeading}>Price</span>
        <div>
          <Slider range
            defaultValue={[500, 1000]} 
            min={100} 
            max={2000} 
          />
        </div>
      </div>
      <hr />
      <div>
        <span className={style.filterHeading}>Colors</span>
        <div className={style.colors}>
          {
            Colors.map((color,index)=>{
              return <span className={style.color} style={{backgroundColor:color,border:`1px solid ${BorderColors[index]}`}}/>
            })
          }
        </div>
      </div>
      <hr />
      <div>
        <span className={style.filterHeading}>Size</span>
        <div className={style.sizes}>
          {
            DressSize.map((size)=>{
              return <span className={style.size}>{size}</span>
            })
          }
        </div>
      </div>
      <hr />
      <div>
        <span className={style.filterHeading}>Dress Style</span>
        <div className={style.styles}>
          {
            DressStyle.map((style)=>{
              return <span className={style.dressStyle}>{style.name}</span>
            })
          }
        </div>
      </div>
    </div>
  )
}

export default Filter
