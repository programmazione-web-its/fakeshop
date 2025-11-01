import ShopContextProvider from './providers/ShopContextProvider'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Homepage from './pages/Homepage'
import About from './pages/About'
import Account from './pages/Account'

function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      Component: Homepage, // element: <Homepage />
    },
    {
      path: '/about',
      Component: About,
    },
    {
      path: '/account',
      Component: Account,
    },
  ])
  return (
    <ShopContextProvider>
      <RouterProvider router={routes} />
    </ShopContextProvider>
  )
}

export default App
