import { createContext } from "react";

const ProductsContext = createContext({
    products: [],
    isLoading: false,
    error: null
})

export default ProductsContext
