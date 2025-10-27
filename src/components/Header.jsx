import { useState, useContext } from 'react'

import CartContext from '../store/cart-context'

import { ShoppingCartSimpleIcon } from '@phosphor-icons/react'

import CartModal from './CartModal'
import logo from '../assets/Logo.png'

function Header() {
  const [openCart, setOpenCart] = useState(false)

  const { items } = useContext(CartContext)

  const cartQuantity = items.length

  let modalActions = <button onClick={() => setOpenCart(false)}>Close</button>

  if (cartQuantity > 0) {
    modalActions = (
      <>
        <button onClick={() => setOpenCart(false)}>Close</button>
        <button>Checkout</button>
      </>
    )
  }

  return (
    <header className='flex items-center justify-between container'>
      <img src={logo} />
      <button
        className='text-white bg-primary px-3 py-1 rounded-md relative'
        onClick={() => setOpenCart(true)}
      >
        <span className='flex itesm-center gap-2 '>
          Cart <ShoppingCartSimpleIcon className='text-secondary' size={24} />
        </span>
        {cartQuantity > 0 && (
          <span className='inline-block rounded-full absolute bg-accent text-primary w-[20px] h-[20px] leading-[20px] text-center top-0 right-0 -translate-y-1/4'>
            {cartQuantity}
          </span>
        )}
      </button>
      {openCart && (
        <CartModal title='Your shopping cart' actions={modalActions} />
      )}
    </header>
  )
}

export default Header
