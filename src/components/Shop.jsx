import Product from './Product'
export default function Shop({ products, isLoading, error }) {
  return (
    <>
      {isLoading && (
        <p className='h-[50vh] flex justify-center items-center'>Loading....</p>
      )}
      {error && (
        <p className='h-[50vh] flex justify-center items-center'>
          ❌ {error.message}
        </p>
      )}
      {products && (
        <div className='grid grid-cols-3 gap-8 container my-10'>
          {products?.map((el) => (
            <Product key={el.id} product={el} />
          ))}
        </div>
      )}
    </>
  )
}
