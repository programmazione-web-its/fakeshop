import { useState, useEffect, useReducer } from 'react'

import ShopContext from '../store/shop-context'

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
      const updatedItems = [...state.items]
      const {id, products} = action.payload
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
        ...state,
        items: updatedItems,
      }
  }

  if (action.type === 'UPDT_QTY') {
      const updatedItems = [...state.items]
      const {productId, amount} = action.payload
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
        ...state,
        items: updatedItems,
      }
  }

  return state
}

export default function ShopContextProvider({ children }) {

  const [products, setProducts] = useState([])
  const [error, setError] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [cart, cartDispatch] = useReducer(cartReducer, {items: []})

  function handleAddItemToCart(id) {
    cartDispatch({type: 'ADD_ITEM', payload: {id, products}})
  }

  function handleUpdateCartItemQuantity(productId, amount) {
   cartDispatch({type: 'UPDT_QTY', payload: {productId, amount}})
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
