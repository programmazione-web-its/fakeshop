import { useLoaderData } from 'react-router-dom'

import Product from './Product'
export default function Shop() {

  const { products } = useLoaderData()
  return (
    <>
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
