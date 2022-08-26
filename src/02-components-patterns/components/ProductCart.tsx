import { useProduct } from '../hooks/useProduct';
import { Provider } from '../context/store';
import { Props } from '../models/shop.interfaces';
import styles from '../styles/styles.module.css'


export const ProductCart = ({product, children, className, style, onChange, counter}:Props) => {

    const { value, increaseBy } = useProduct({onChange, product, counter});

  return (
    <div 
      className={`${styles.productCard} ${className}`}
      style={style}
    >
        <Provider value={{increaseBy, value, product}}>
            { children }
        </Provider>
    </div>
  )
}


// export default ProductCart;

