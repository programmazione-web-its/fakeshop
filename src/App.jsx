import { useState } from 'react'

import CartContext from './store/cart-context'

import CartContextProvider from './providers/CartContextProvider'
import Header from './components/Header'
import Shop from './components/Shop'


import DUMMY_PRODUCTS from './data/products.json'

function App() {

  return (
    <>
      <CartContextProvider>
        <Header />
        <Shop products={DUMMY_PRODUCTS} />
      </CartContextProvider>
      <footer className='bg-secondary  rounded-t-xl mt-20'>
        <div className='container text-primary text-md text-center py-20 '>
          Copyright © {new Date().getFullYear()} - Fakeshop. All right reserved
        </div>
      </footer>
    </>
  )
}

export default App
