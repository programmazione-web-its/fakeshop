import { Outlet } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout() {
  return (
    <>
      <Header />
      <main className='container mx-auto mt-8 min-h-[50vh]'>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
