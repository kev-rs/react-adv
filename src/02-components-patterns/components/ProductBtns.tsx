import styles from '../styles/styles.module.css'
import { useContext } from 'react';
import { ShopContext } from '../context/store';

export const ProductBtns = () => {

    const { increaseBy, value } = useContext(ShopContext);

    return (
        <div className={styles.buttonsContainer}>
            <button 
                className={styles.buttonMinus}
                onClick={() => increaseBy(-1)}
            >-</button>
            <div className={styles.countLabel}>{value}</div>

            <button
                className={styles.buttonAdd}
                onClick={() => increaseBy(1)}
            >+</button>
        </div>
    )
}