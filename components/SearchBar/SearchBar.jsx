import React from 'react'
import style from './SearchBar.module.scss'

export const SearchBar = () => {

  return (
    <div className={style.SearchBar}>
      <input type="text" placeholder='Search for products...'/>
    </div>
  )
}

