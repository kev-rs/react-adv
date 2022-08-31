import { products } from '../data/products';
import { ProductCart } from '../components/index'
import '../styles/modo.css'

const product = products[0];

const ShoppingPage = () => {

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <ProductCart
        key={product.id}
        product={product}
        className='dark'
        initialValue={{
          count: 4,
          maxCount: 10,
        }}
      >
        {
          ({reset, increaseBy, maxCount, isMaxReached, count, product}) => (
            console.log(isMaxReached),
            <>
              <ProductCart.Img className='custom-img' />
              <ProductCart.Title className='text-white' />
              <ProductCart.Btns className='text-white' />

              <button onClick={reset}>reset</button>
              
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxReached &&
                <button onClick={() => increaseBy(2)}>+2</button>
              }
              <span>{count} - {maxCount}</span>
            </>
          )
        }
      </ProductCart>
    </div>
  )
}

export default ShoppingPage;

