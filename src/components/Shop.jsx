import { useContext } from 'react'
import ShopContext from '../store/shop-context'

import Product from './Product'
export default function Shop() {
  const { productsData } = useContext(ShopContext)
  const { products, isLoading, error } = productsData || {}

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
      {products?.products && (
        <div className='grid grid-cols-3 gap-8 container my-10'>
          {products.products?.map((el) => (
            <Product key={el.id} product={el} />
          ))}
        </div>
      )}
    </>
  )
}
