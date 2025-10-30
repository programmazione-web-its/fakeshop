import ProductsContextProvider from './providers/ProductsContextProvider'
import CartContextProvider from './providers/CartContextProvider'

import Homepage from './pages/Homepage'

function App() {
  return (
    <ProductsContextProvider>
      <CartContextProvider>
        <Homepage />
      </CartContextProvider>
    </ProductsContextProvider>
  )
}

export default App
