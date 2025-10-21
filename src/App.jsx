import products from './data/products.json'

function App() {
  return (
    <>
      <h1>Fakeshop</h1>
      <footer className='bg-secondary  rounded-t-xl mt-20'>
        <div className='container text-primary text-md text-center py-20 '>
          Copyright © {new Date().getFullYear()} - Fakeshop. All right reserved
        </div>
      </footer>
    </>
  )
}

export default App
