import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import siteRoutes from './siteRoutes'


function App() {
  const routes = createBrowserRouter(siteRoutes)
  return (
   
      <RouterProvider router={routes} />
   
  )
}

export default App
