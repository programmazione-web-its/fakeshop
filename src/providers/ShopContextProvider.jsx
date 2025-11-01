import { useState, useEffect } from 'react'

import ShopContext from '../store/shop-context'

export default function ShopContextProvider({ children }) {
  const [products, setProducts] = useState([])
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
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
        const product = products?.products.find((product) => product.id === id)
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

  useEffect(() => {
    async function getProducts() {
      setIsLoading(true)
      try {
        const response = await fetch('https://dummyjson.com/products')
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    getProducts()
  }, [])

  const shopCtx = {
    productsData: { products, isLoading, error },
    cartData: {
      items: cart.items,
      addItemToCart: handleAddItemToCart,
      changeItemQuantity: handleUpdateCartItemQuantity,
    },
  }

  return <ShopContext.Provider value={shopCtx}>{children}</ShopContext.Provider>
}
