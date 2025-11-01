import { createContext } from 'react'

const ShopContext = createContext({
  productsData: {
    products: {},
    isLoading: false,
    error: null,
  },
  cartData: {
    items: [],
    addItemToCart: () => {},
    changeItemQuantity: () => {},
  },
})

export default ShopContext
