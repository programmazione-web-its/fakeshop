import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useUpdateCartMutation } from "../store/api-slice"
import { addItem } from "../store/cart-slice"



function Product({ product }) {
  const { id, title, price, thumbnail, description } = product
  const dispatch = useDispatch()

  const [updateCart, {isLoading, error, data}] = useUpdateCartMutation()

  const addToCart = async () => {
    await(updateCart(product.id))
    console.log("data", data)
  }

  useEffect(() => {
    if (!data) return
    dispatch(addItem(data.products))
  }, [data] )

  return (
    <div id={id} className='product h-full flex flex-col relative'>
      <div className='w-full h-90 p-6 bg-gradient-to-b from-[#f9f9f9] to-[#f1f1f1] flex items-center justify-center'>
        <img
          src={thumbnail}
          alt={title}
          className='max-h-full max-w-full object-contain mx-auto'
        />
      </div>
      <div className='bg-primary rounded-t-lg px-4 py-8 flex flex-col flex-grow'>
        <div className='min-h-[80px] flex flex-col justify-between mb-2'>
          <h2 className='text-2xl text-secondary font-bold leading-tight line-clamp-2'>
            {title}
          </h2>
          <p className='text-white text-xl font-bold'>€ {price}</p>
        </div>
        <p className='text-white mb-8 line-clamp-6'>{description}</p>
        <button
          className='bg-accent text-primary uppercase w-full cursor-pointer rounded-md py-1 px-2 text-center mt-auto mb-3'
          onClick={() => addToCart()}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Product
