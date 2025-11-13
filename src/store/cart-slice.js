import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  status: 'idle',
  error: null,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addItem: (state, action) => {
    //   const updatedItems = [...state.items]
    //   const { id, products } = action.payload
    //   const existingCartItemIndex = updatedItems.findIndex(
    //     (cartItem) => cartItem.id === id
    //   )
    //   const existingCartItem = updatedItems[existingCartItemIndex]

    //   if (existingCartItem) {
    //     const updatedItem = {
    //       ...existingCartItem,
    //       quantity: existingCartItem.quantity + 1,
    //     }
    //     updatedItems[existingCartItemIndex] = updatedItem
    //   } else {
    //     const product = products?.find((product) => product.id === id)
    //     updatedItems.push({
    //       ...product,
    //       quantity: 1,
    //     })
    //   }

    //   state.items = updatedItems
    // },
    setLoading: (state) => {
      state.status = 'loading'
      state.error = null
    },
    setSuccess: (state, action) => {
      state.status = 'succeeded'
      state.items = action.payload // Riceve i prodotti dal server
    },
    setError: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
    addItem: (state, action) => {
      state.items.push(action.payload)
    },
    updateItemQty: (state, action) => {
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
      state.items = updatedItems
    },
  },
})

export const {
  addItem,
  updateItemQty,
  setLoading,
  setSuccess,
  setError,
} = cartSlice.actions
export default cartSlice.reducer
