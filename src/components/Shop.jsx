import Product from './Product'
export default function Shop({ products }) {
  return (
    <div className='grid grid-cols-3 gap-8 container my-10'>
      {products?.map((el) => (
        <Product key={el.id} product={el} />
      ))}
    </div>
  )
}
