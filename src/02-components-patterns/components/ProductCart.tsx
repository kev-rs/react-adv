import { useProduct } from '../hooks/useProduct';
import { Provider } from '../context/store';
import { Props } from '../models/shop.interfaces';
import styles from '../styles/styles.module.css'


export const ProductCart = ({ product, children, className, style, onChange, counter, initialValue }:Props) => {

  const { value, increaseBy, isMaxReached, reset } = useProduct({ onChange, product, counter, initialValue });

  return (
    <div
      className={`${styles.productCard} ${className}`}
      style={style}
    >
      <Provider value={{ increaseBy, value, product, maxCount: initialValue?.maxCount }}>
        { 
          children({
              count: value, 
              maxCount: initialValue?.maxCount,
              isMaxReached,
              product,
              increaseBy,
              reset,
            }) 
          }
      </Provider>
    </div>
  )
}


// export default ProductCart;

