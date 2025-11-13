import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Layout() {
  const { status, error } = useSelector((state) => state.cart)
  return (
    <>
      <Header />
      <main className='container mx-auto mt-8'>
        <Outlet />
      </main>
      <div className='fixed bottom-0 right-0 z-[999] '>
        {status === 'failed' && (
          <p className='bg-red-100 p-2'>❌ Errore: {error}</p>
        )}
        {status === 'succeeded' && (
          <p className='bg-green-100 p-2'>✅ Carrello aggiornato!</p>
        )}
      </div>
      <Footer />
    </>
  )
}
