function Product({ product, addToCart }) {
  const { id, title, price, image } = product
  return (
    <div id={id} className='product'>
      <div className='w-full aspect-square mb-6'>
        <img
          src={image}
          alt={title}
          className='w-full h-full object-contain object-center m-auto'
        />
      </div>
      <h2>{title}</h2>
      <p>{price}</p>
      <button
        className='bg-accent text-primary uppercase w-full cursor-pointer rounded-md py-1 px-2 text-center my-3'
        onClick={() => addToCart(id)}
      >
        Add to cart
      </button>
    </div>
  )
}

export default Product
