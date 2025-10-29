import { useState, useEffect } from "react"

import ProductsContext from "../store/products-context"

export default function ProductsContextProvider({ children }) {
    const [products, setProducts] = useState([])
    const [error, setError] = useState()
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        async function getProducts() {
            setIsLoading(true)
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                if (!response.ok) {
                    throw new Error('Failed to fetch products')
                }
                const data = await response.json()
                setProducts(data)

            } catch (error) {
                setError(error)
            } finally {
                setIsLoading(false)
            }
        }
        getProducts()

    }, [])

    const productsCtx = {
        products,
        isLoading,
        error
    }

    return <ProductsContext.Provider value={productsCtx}>{children}</ProductsContext.Provider>

}