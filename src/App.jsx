import ShopContextProvider from './providers/ShopContextProvider'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import siteRoutes from './siteRoutes'

function App() {
  const routes = createBrowserRouter(siteRoutes)
  return (
    <ShopContextProvider>
      <RouterProvider router={routes} />
    </ShopContextProvider>
  )
}

export default App
