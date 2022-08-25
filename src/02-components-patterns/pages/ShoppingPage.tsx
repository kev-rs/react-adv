import { ProductBtns, ProductImg, ProductTitle, ProductCart } from '../components/index';
import '../styles/modo.css'
const product = {
  id: '1',
  title: 'Coffe Mug - 2',
  img: "./coffee-mug.png",
}

const ShoppingPage = () => {
  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}>
          <ProductCart 
            product={product}
            className='dark'
            style={{
              backgroundColor: 'red'
            }}
          >
            <ProductCart.Img className='custom-img' />
            <ProductCart.Title className='text-white' />
            <ProductCart.Btns className='text-white' />
          </ProductCart>

          <ProductCart
            product={product}
            className='dark'
          >
            <ProductImg className='custom-img' />
            <ProductTitle className='text-white' />
            <ProductBtns className='text-white'/>

          </ProductCart>
        </div>
    </div>
  )
}

export default ShoppingPage;

