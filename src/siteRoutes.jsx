
import Layout from './layouts/Layout'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Account from './pages/Account'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
const siteRoutes = [  {
      path: '/',
      Component: Layout,
      children: [
        {
          index: true,
          Component: Homepage,
          showInNav: true,
        title: 'Shop'
        },
        {
          path: 'about',
          Component: About,
          showInNav: true,
          title: 'About'
        },
        {
          path: 'account',
          Component: Account,
          showInNav: true,
          title: 'Account'
        },
        {
          path: 'product/:id',
          Component: Product
        },
        {
          path: '*',
          Component: NotFound
        }
      ]
    }, ]

 export default siteRoutes   