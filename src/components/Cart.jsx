import { useContext } from 'react'
import CartContext from '../store/cart-context'

import { MinusCircleIcon, PlusCircleIcon } from '@phosphor-icons/react'
export default function Cart() {
  const { items, changeItemQuantity } = useContext(CartContext)
 

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )
  const formattedTotalPrice = `$${totalPrice.toFixed(2)}`

  return (
    <div>
      {items.length > 0 ? (
        <>
          <ul>
            {items.map((item) => (
              <li
                key={item.id}
                className='grid grid-cols-6 gap-3 border-b border-b-[#C7C7C7] py-2'
              >
                <div className='col-span-1'>
                  <img
                    src={item.image}
                    className='w-full h-full object-contain aspect-square'
                  />
                </div>
                <div className='col-span-3'> {item.title}</div>
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
          <p className='mt-8 '>
            Cart Total: <strong>{formattedTotalPrice}</strong>
          </p>
        </>
      ) : (
        <p>No items found</p>
      )}
    </div>
  )
}
