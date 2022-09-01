import { Provider } from '../context/store';
import { useProduct } from '../hooks/useProduct';
import { Props } from '../models/shop.interfaces';
import styles from '../styles/styles.module.css'

export const ProductCart = ({children, product, onChange, className, counter, initialValue}:Props) => {

  const { value, increaseBy } = useProduct({onChange, product, counter, initialValue});

  return (
    <Provider value={{ value, increaseBy, product, maxCount: initialValue?.maxCount }}>
      <div className={`${styles.productCard} ${className}`}>
        { children() }
      </div>
    </Provider>
  )
}

