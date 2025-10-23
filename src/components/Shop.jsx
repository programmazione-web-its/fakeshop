import Product from './Product'
export default function Shop({ products, onAddToCart }) {
  return (
    <div className='grid grid-cols-3 gap-8 container'>
      {products?.map((el) => (
        <Product key={el.id} product={el} addToCart={onAddToCart} />
      ))}
    </div>
  )
}
