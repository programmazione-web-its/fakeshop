import { createPortal } from 'react-dom'
import { XCircleIcon } from '@phosphor-icons/react'

import Cart from './Cart'

export default function CartModal({ title, actions, onClose }) {
  return createPortal(
    <>
      <div
        onClick={onClose}
        className='absolute inset-0 bg-black/50 z-[998] h-screen flex items-center justify-end'
      />
      <div className='bg-white px-4 py-10 rounded-l-md w-1/3 min-h-[40vh] flex flex-col items-start fixed z-[999] top-1/2 right-0 -translate-y-1/2'>
        <XCircleIcon
          onClick={onClose}
          size={35}
          className='text-primary absolute right-4 cursor-pointer'
        />
        <h2 className='text-primary font-bold text-xl mb-8'>{title}</h2>
        <Cart />
        <div className='mt-auto flex items-center gap-3 justify-center'>
          {actions}
        </div>
      </div>
    </>,
    document.body
  )
}
