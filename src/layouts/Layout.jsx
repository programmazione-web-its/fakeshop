import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main className='container mx-auto mt-8'> {children}</main>
      <Footer />
    </>
  )
}
