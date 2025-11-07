import { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { setProducts } from '../store/products-slice'

import Product from './Product'
export default function Shop() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState()

const { products } = useSelector(state => state.products)
const dispatch = useDispatch()


  
  useEffect(() => {
    async function getProducts() {
      setIsLoading(true)
      try {
        const response = await fetch('https://dummyjson.com/products')
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        const data = await response.json()
        console.log("data", data)
        dispatch(setProducts({...data}))
      } catch (error) {
        setError(error)
      } finally {
        setIsLoading(false)
      }
    }
    getProducts()
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
          {products.map((el) => (
            <Product key={el.id} product={el} />
          ))}
        </div>
      )}
    </>
  )
}
