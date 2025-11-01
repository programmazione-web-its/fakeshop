import { useContext } from 'react'
import ShopContext from '../store/shop-context'

import { MinusCircleIcon, PlusCircleIcon } from '@phosphor-icons/react'
export default function Cart() {
  const { cartData } = useContext(ShopContext)
  const { items, changeItemQuantity } = cartData || {}

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const formattedTotalPrice = `€ ${totalPrice.toFixed(2)}`

  return (
    <div className='w-full'>
      {items.length > 0 ? (
        <>
          <ul>
            {items.map((item) => (
              <li
                key={item.id}
                className='grid grid-cols-6 gap-3 border-b border-b-[#C7C7C7] py-2'
              >
                <div className='col-span-1 bg-gradient-to-b from-[#f9f9f9] to-[#f1f1f1]'>
                  <img
                    src={item.thumbnail}
                    className='w-full h-full object-contain aspect-square'
                  />
                </div>
                <div className='col-span-3 flex flex-col gap-1 justify-center'>
                  <h4 className='font-semibold text-md'>{item.title}</h4>

                  <p className='block'>€ {item.price.toFixed(2)}</p>
                </div>
                <div className='col-span-2 flex items-center justify-end gap-2'>
                  <button onClick={() => changeItemQuantity(item.id, -1)}>
                    <MinusCircleIcon size={24} />
                  </button>
                  {item.quantity}
                  <button onClick={() => changeItemQuantity(item.id, 1)}>
                    <PlusCircleIcon size={24} />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <p className='my-8 text-right'>
            Cart Total: <strong>{formattedTotalPrice}</strong>
          </p>
        </>
      ) : (
        <div className='flex items-center justify-center text-center flex-col w-full h-full'>
          <p className='py-7 text-center mx-auto'>No items found</p>
        </div>
      )}
    </div>
  )
}
