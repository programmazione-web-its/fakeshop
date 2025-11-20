import { useState, useEffect, useReducer } from 'react'

import ShopContext from '../store/shop-context'

function cartReducer(state, action) {
  if (action.type === 'ADD_ITEM') {
    const updatedItems = [...state.items]
    const { id, products } = action.payload
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
    const { productId, amount } = action.payload
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
  const [cart, cartDispatch] = useReducer(cartReducer, { items: [] })

  function handleAddItemToCart(id) {
    cartDispatch({ type: 'ADD_ITEM', payload: { id, products } })
  }

  function handleUpdateCartItemQuantity(productId, amount) {
    cartDispatch({ type: 'UPDT_QTY', payload: { productId, amount } })
  }

  const shopCtx = {
    cartData: {
      items: cart.items,
      addItemToCart: handleAddItemToCart,
      changeItemQuantity: handleUpdateCartItemQuantity,
    },
  }

  return <ShopContext.Provider value={shopCtx}>{children}</ShopContext.Provider>
}
