import Image from 'next/image'
import rightArrow from '../../public/images/icons/right-arrow-svgrepo-com.svg'
import Trash from '../../public/images/icons/trash-svgrepo-com.svg'
import Plus from '../../public/images/icons/plus-large-svgrepo-com.svg'
import Minus from '../../public/images/icons/minus-svgrepo-com.svg'
import Shirt from '../../public/images/photos/shirt.png'
import style from './cart.module.scss'
import { useState } from 'react'
import { OrderSummaryTexts } from '@/util/constants'

const Cart = () => {

  const ItemCart = () => {
    const [quantity, setQuantity] = useState(1)

    const IncrementQuantity = () => {
      let counter = quantity
      if(quantity < 10){
        setQuantity(counter+1)
      }
    }
  
    const DecrementQuantity = () => {
      let counter = quantity
      if(quantity > 1){
        setQuantity(counter-1)
      }
    }
    return (
      <div className={style.item}>
        <Image src={Shirt} alt="Shirt" height="150" width="150" className={style.itemImage}/>
        <div className={style.itemInfo}>
          <div className={style.itemText}>
            <h3>Gradient Graphic T-shirt</h3>
            <Image src={Trash} alt="Trash" height="15" width="15" style={{cursor:'pointer'}}/>
          </div>
          <div>
            <span>Size: Large</span>
            <span>Color: Black</span>
          </div>
          <div className={style.itemText}>
            <span>$150</span>
            <div className={style.quantityBtn}>
              <button type="button" onClick={IncrementQuantity}>
                <Image alt='increment' src={Plus}/>
              </button>
              <span>{quantity}</span>
              <button type="button" onClick={DecrementQuantity}>
                <Image alt='decrement' src={Minus}/>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const OrderSummaryContent = ({text, amount}) => {
    return (
      <>
        {text === 'Total' && <hr/>}
        <div className={style.prices}>
          <span>{text}</span>
          <span>{amount}</span>
        </div>
      </>
    )
  }

  return (
    <div className={style.cart}>
      <span className={style.location}>
        Home
        <Image src={rightArrow} alt="rightController" width="30" height="12" className={style.rightController}/>
        Cart
      </span>
      <h2>YOUR CART</h2>
      <div className={style.cartItems}>
        <div className={style.eachCartItem}>
          <ItemCart/>
          <hr />
          <ItemCart/>
          <hr />
          <ItemCart/>
          <hr />
          <ItemCart/>
        </div>
        <div className={style.orderSummary}>
          <h2>Order Summary</h2>
          {
            OrderSummaryTexts.map(item=>{
              return <OrderSummaryContent text={item.text} amount={item.amount}/>
            })
          }
          <div>
            <button type="button" className={`${style.btn} btn`}>Go To Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
