import { Product } from '../components'
import { products } from '../data/products';
import { useState } from 'react';
import { Product as Product_ } from '../models/shop.interfaces';

interface ProductInCart extends Product_ {
    count: number;
}

export interface onChange {
    n: number;
    product: Product_;
    count?: number;
}

const ShoppingPage = () => {

    const [ cart, setCart ] = useState<{[key:string]: ProductInCart}>({});

    const onChange = ({n, product, count}:onChange):void => {
        setCart(prev => {
            const productInCart = cart[product.id] || {...product, count}

            if(Math.max(productInCart.count + n, 0) > 0) {
                productInCart.count += n;
                return {...prev, [product.id]: productInCart};
            }

            const { [product.id]:toDelete, ...rest } = prev;
            return {...rest};
        })
    }

  return (
    <>
        {
            products.map(product => (
                <Product
                    key={product.id}
                    product={product}
                    onChange={onChange}
                    counter={cart[product.id]?.count}
                    initialValue={{
                        count: 2,
                        maxCount: 8,
                    }}
                >
                    {() => (
                        <>
                            <Product.Img />
                            <Product.Info />
                            <Product.Btn />
                        </>
                    )}
                </Product>
            ))
        }

            <div className='cart'>        
                {
                    Object.entries(cart).map(([key, value]) => (
                        <Product
                            key={key}
                            product={value}
                            onChange={onChange}
                            counter={value.count}
                            initialValue={{
                                count: 2,
                                maxCount: 8,
                            }}
                            className='cart-img' 
                        >
                            {() => (
                                <>
                                    <Product.Img className='img-cart' />
                                    <Product.Btn />
                                </>
                            )}
                        </Product>
                    ))
                }
            </div>
        
    </>
  )
}

export default ShoppingPage;