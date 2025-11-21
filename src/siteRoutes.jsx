import Layout from './layouts/Layout'
import Homepage from './pages/Homepage'
import About from './pages/About'
import Account from './pages/Account'
import NotFound from './pages/NotFound'
import SingleProduct from './pages/SingleProduct'
import Login from './pages/Login'
import ErrorPage from './pages/ErrorPage'

import { redirect } from 'react-router-dom'

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
        loader: async () => {
          const response = await fetch(`https://dummyjson.com/products`)
          if (!response.ok) {
            throw new Response('Failed to fetch products', { status: 500 })
          }
          return response.json()
        },
        errorElement: <ErrorPage />
      },
      {
        path: 'about',
        Component: About,
        showInNav: true,
        title: 'About',
      },
      {
        path: 'login',
        Component: Login,
        showInNav: true,
        title: 'Login',
        action: async ({ request }) => {
          console.log("Request from action", request)
          const formData = await request.formData()

          console.log("Form data", formData)

          const res = await fetch('https://dummyjson.com/auth/login', {
            method: request.method,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              username: formData.get('username'),
              password: formData.get('password'),
            }),
          })

          if (!res.ok) {
            throw new Response('Something went wrong', {status: 500})
          }
          return res.json()
        }
      },
      {
        path: 'account',
        Component: Account,
        showInNav: false,
      },
      {
        path: 'product/:id',
        Component: SingleProduct,
        loader: async ({ params }) => {
          console.log("params", params)
          const response = await fetch(`https://dummyjson.com/product/${params.id}`)
          if (!response.ok) {
            throw new Response('Failed to fetch product', { status: 500 })
          }
          return response.json()
        },
        errorElement: <ErrorPage />
      },
      {
        path: '*',
        Component: NotFound,
      },
    ],
  },
]

export default siteRoutes
