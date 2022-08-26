import { ProductBtns, ProductImg, ProductTitle, ProductCart } from '../components/index';
import { On_change, Product } from '../models/shop.interfaces';
import '../styles/modo.css'
import { useState } from 'react';

const products:Product[] = [
  {
    id: '1',
    title: 'Coffe Mug - 1',
    img: "./coffee-mug.png",
  },
  {
    id: '2',
    title: 'Coffe Mug - 2',
    img: "./coffee-mug2.png",
  },
]

interface ProductInCart extends Product {
  counter: number;
}

const ShoppingPage = () => {
  
  const [cart, setCart] = useState<{[key:string]:ProductInCart}>({})

  console.log(cart);
  

  const handleChange = ({value, product}:On_change) => {
    setCart(prev => {
      if(value === 0) {
        const { [product.id]:toDelete, ...rest } = prev;
        return { ...rest }
      }

      return {
        ...prev,
        [product.id]: { ...product, counter: value }
      }
    })
  }
  
  return (
    <div>
        <h1>ShoppingPage</h1>
        <hr />
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
        }}>
          {
            products.map(product => (
              <ProductCart
                onChange={handleChange}
                counter={cart[product.id]?.counter || 0}
                key={product.id}
                product={product}
                className='dark'
                style={{
                  backgroundColor: '#333'
                }}
              >
                <ProductCart.Img className='custom-img' />
                <ProductCart.Title className='text-white' />
                <ProductCart.Btns className='text-white' />
              </ProductCart>
            ))
          }
        </div>

        <div className='product-cart-aside'>
          {
              Object.entries(cart).map(([key, value]) => (
                <ProductCart
                  onChange={handleChange}
                  counter={value.counter}
                  key={key}
                  product={value}
                  className='dark'
                  style={{
                    backgroundColor: '#333',
                    width: '100px',
                  }}
                >
                  <ProductCart.Img className='custom-img' />
                  <ProductCart.Btns className='text-white' />
                </ProductCart>
            ))
            // products.map(product => (
            //   (cart[product.id]) && 
            //     <ProductCart
            //       key={product.id}
            //       product={product}
            //       className='dark'
                  // style={{
                  //   backgroundColor: '#333',
                  //   width: '100px'
                  // }}
            //     >
            //       <ProductCart.Img className='custom-img' />
            //       <ProductCart.Btns className='text-white' />
            //     </ProductCart>
            // ))
          }
        </div>
    </div>
  )
}

export default ShoppingPage;

