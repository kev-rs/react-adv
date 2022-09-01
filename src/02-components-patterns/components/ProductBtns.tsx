import styles from '../styles/styles.module.css'
import { useContext, useCallback } from 'react';
import { ShopContext } from '../context/store';

export const ProductBtns = () => {

  const { value, increaseBy, maxCount } = useContext(ShopContext);

  const isMaxReached = useCallback(() => !!value && value === maxCount, [value, maxCount])

  return (
    <div
      className={styles.buttonsContainer}
    >
      <button
        className={`${styles.buttonMinus}`}
        onClick={() => increaseBy(-1)}
      >-</button>

      <div
        className={`${styles.countLabel}`}
      >{value || 0}</div>

      <button
        className={`${styles.buttonAdd} ${styles.disabled}`}
        disabled={isMaxReached()}
        onClick={() => increaseBy(1)}
      >+</button>
    </div>
  )
}

