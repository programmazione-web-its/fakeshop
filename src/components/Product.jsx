import { useContext } from 'react'
import CartContext from '../store/cart-context'

function Product({ product }) {
  const { id, title, price, image, description } = product
  const { addItemToCart } = useContext(CartContext)
  return (
    <div id={id} className='product h-full relative '>
      <div className='w-full aspect-square mb-6 shrink-0 grow-0'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-contain object-center m-auto'
        />
      </div>
      <div className='bg-primary rounded-t-lg p-4 flex flex-col'>
      <h2 className='text-2xl text-secondary font-bold'>{title}</h2>
      <p className='text-white text-xl my-2 font-bold'>€ {price}</p>
      <p className='text-white'>{description}</p>
      <button
        className='bg-accent text-primary uppercase w-full cursor-pointer rounded-md py-1 px-2 text-center mt-auto mb-3'
        onClick={() => addItemToCart(id)}
      >
        Add to cart
      </button>
      </div>
    </div>
  )
}

export default Product
