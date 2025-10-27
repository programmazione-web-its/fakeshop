import { useState, useEffect } from 'react'

import CartContextProvider from './providers/CartContextProvider'
import Header from './components/Header'
import Shop from './components/Shop'


function App() {

  const [products, setProducts] = useState([])



  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((json) => {
      console.log("content is fetching")
      setProducts(json)
    })
  }, [])


  return (
    <>
      <CartContextProvider>
        <Header />
        <Shop products={products} />
        1 2 3 4
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
