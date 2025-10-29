import ProductsContextProvider from './providers/ProductsContextProvider'
import CartContextProvider from './providers/CartContextProvider'
import Header from './components/Header'
import Shop from './components/Shop'

function App() {
  return (
    <>
    <ProductsContextProvider>
      <CartContextProvider>
        <Header />
        <Shop />
      </CartContextProvider>
    </ProductsContextProvider>
      <footer className='bg-secondary  rounded-t-xl mt-20'>
        <div className='container text-primary text-md text-center py-20 '>
          Copyright © {new Date().getFullYear()} - Fakeshop. All right reserved
        </div>
      </footer>
    </>
  )
}

export default App
