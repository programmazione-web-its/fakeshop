import { useContext, useState, useEffect } from 'react'
import ShopContext from '../store/shop-context'

import Product from './Product'
export default function Shop() {
  const [products, setProducts] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

  useEffect(() => {
    const getProduct = async () => {
      setIsLoading(true)
      try {
        const response = await fetch(`https://dummyjson.com/products`)
        if (!response.ok) {
          throw new Error('Failed to fetch')
        }
        const data = await response.json()
        setProducts(data.products)
        setError()
      } catch (err) {
        console.log('err', err)
        setError(err.message)
      } finally {
        setIsLoading(false)
      }
    }
    getProduct()
  }, [])

  return (
    <>
      {isLoading && (
        <p className='h-[50vh] flex justify-center items-center'>Loading....</p>
      )}
      {error && (
        <p className='h-[50vh] flex justify-center items-center'>
          ❌ {error.message}
        </p>
      )}
      {products && (
        <div className='grid grid-cols-3 gap-8 container my-10'>
          {products?.map((el) => (
            <Product key={el.id} product={el} />
          ))}
        </div>
      )}
    </>
  )
}
