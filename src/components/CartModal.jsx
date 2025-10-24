import { createPortal } from 'react-dom'

import Cart from './Cart'

export default function CartModal({ title, items, actions }) {
  return createPortal(
    <div className='fixed inset-0 bg-black/50 z-[999] h-screen flex items-center justify-end'>
      <div className='bg-white px-4 py-10 rounded-l-md w-1/3 min-h-[40vh] flex flex-col items-start'>
        <h2>{title}</h2>
        <Cart items={items} />
        <div className='mt-auto flex items-center gap-3 justify-center'>
          {actions}
        </div>
      </div>
    </div>,
    document.body
  )
}
