import Layout from './layouts/Layout'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Account from './pages/Account'
import NotFound from './pages/NotFound'
import SingleProduct from './pages/SingleProduct'
const siteRoutes = [
  {
    path: '/',
    Component: Layout,
    children: [
      {
        index: true,
        Component: Homepage,
        showInNav: true,
        title: 'Shop',
      },
      {
        path: 'about',
        Component: About,
        showInNav: true,
        title: 'About',
      },
      {
        path: 'account',
        Component: Account,
        showInNav: true,
        title: 'Account',
      },
      {
        path: 'product/:id',
        Component: SingleProduct,
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]

export default siteRoutes
