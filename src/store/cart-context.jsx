import { createContext } from 'react'

const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  changeItemQuantity: () => {},
})

export default CartContext
