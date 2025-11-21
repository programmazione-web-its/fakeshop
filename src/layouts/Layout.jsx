import { Outlet, useNavigation } from 'react-router-dom'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout() {
  const navigation = useNavigation()

  return (
    <>
      <Header />
      <main className='container mx-auto mt-8 min-h-[50vh]'>
        {navigation.state === 'loading' && <p>Content is loading...</p>}
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
