import { useProduct } from '../hooks/useProduct';
import styles from '../styles/styles.module.css'
import { Provider } from '../context/store';
import { Props } from '../models/shop.interfaces';


export const ProductCart = ({product, children, className, style}:Props) => {

    const { value, increaseBy } = useProduct();

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

