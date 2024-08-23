import React from 'react'
import style from './Header.module.scss'
import Cart from '../../public/images/icons/cart-shopping-svgrepo-com.svg'
import Account from '../../public/images/icons/account-circle-svgrepo-com.svg'
import { SearchBar } from '../SearchBar/SearchBar'
import Image from 'next/image'
import Link from 'next/link'


export const Header = () => {
  return (
    <div className={style.mainHeader}>
      <div className={style.menuContents}>
        <div className={style.brandName}>
            <Link className="link" href='/'>SHOPPER_BY</Link>
        </div>
        <ul className={style.menuItems}>
            {/* <ul> */}
                <li>Shop</li>
                <li>On Sale</li>
                <li>New Arrivals</li>
                <li>Brands</li>
            {/* </ul> */}
        </ul>
        <div className={style.searchBar}>
            <SearchBar/>
        </div>
        <div className={style.cartAndAccount}>
            <Image src={Cart} alt="Cart"/>
            <Image src={Account} alt="Account"/>
        </div>
      </div>
    </div>
  )
}

