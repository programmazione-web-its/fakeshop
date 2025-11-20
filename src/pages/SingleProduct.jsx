import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function SingleProduct() {
  const { id } = useParams()
  const [product, setProduct] = useState()

  return (
    product && (
      <div className='container lg:flex gap-3 py-8'>
        <div className='lg:w-1/2 grow-0 shrink-0'>
          <img
            src={product.thumbnail}
            alt={product.title}
            className='max-h-full max-w-full object-contain mx-auto'
          />
        </div>
        <div>
          <h1 className='font-bold text-3xl'>{product.title}</h1>
          {product.tags && (
            <div className='flex gap-3 items-center my-4'>
              {product.tags.map((tag) => (
                <span
                  className='bg-neutral-100/10 text-sm px-3 py-0.5 rounded-full'
                  key={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <p className='mt-4 mb-8'>{product.description}</p>

          <button className='bg-primary text-white uppercase  cursor-pointer rounded-md py-1 px-6 text-center mt-auto mb-3'>
            Add to cart
          </button>
        </div>
      </div>
    )
  )
}
