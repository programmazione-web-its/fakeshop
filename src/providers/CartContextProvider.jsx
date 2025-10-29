import  { useState, useContext } from 'react'
import CartContext from "../store/cart-context"
import ProductsContext from '../store/products-context'
import ProductsContextProvider from './ProductsContextProvider'


export default function CartContextProvider({children}) {

  const { products } = useContext(ProductsContext)

  const [cart, setCart] = useState({ items: [] })

  function handleAddItemToCart(id) {
    setCart((prevCart) => {
      const updatedItems = [...prevCart.items]

      const existingCartItemIndex = updatedItems.findIndex(
        (cartItem) => cartItem.id === id
      )
      const existingCartItem = updatedItems[existingCartItemIndex]

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        }
        updatedItems[existingCartItemIndex] = updatedItem
      } else {
        const product = products.find((product) => product.id === id)
        updatedItems.push({
          ...product,
          quantity: 1,
        })
      }

      return {
        items: updatedItems,
      }
    })
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    setCart((prevCart) => {
      const updatedItems = [...prevCart.items]
      const updatedItemIndex = updatedItems.findIndex(
        (item) => item.id === productId
      )

      const updatedItem = {
        ...updatedItems[updatedItemIndex],
      }

      updatedItem.quantity += amount

      if (updatedItem.quantity <= 0) {
        updatedItems.splice(updatedItemIndex, 1)
      } else {
        updatedItems[updatedItemIndex] = updatedItem
      }

      return {
        items: updatedItems,
      }
    })
  }

  const cartContextValue = {
    items: cart.items,
    addItemToCart: handleAddItemToCart,
    changeItemQuantity: handleUpdateCartItemQuantity,
  }


    return <CartContext.Provider value={cartContextValue}>{children}</CartContext.Provider>
}