
import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './cart-slice.js'
import productsReducer  from './products-slice.js'
import { apiSlice } from './api-slice.js'


const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(apiSlice.middleware)
  
})

export default store