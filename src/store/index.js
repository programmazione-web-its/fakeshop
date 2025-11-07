
import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cart-slice.js'
import productsReducer  from './products-slice.js'


const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer
  }
})

export default store