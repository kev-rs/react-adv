import styles from '../styles/styles.module.css'
import { useContext } from 'react';
import { ShopContext } from '../context/store';
import { Style } from '../models/shop.interfaces';

export const ProductBtns = ({className, style}:Style) => {

    const { increaseBy, value } = useContext(ShopContext);

    return (
        <div 
            className={styles.buttonsContainer}
            style={style}
        >
            <button 
                className={`${styles.buttonMinus} ${className}`}
                onClick={() => increaseBy(-1)}
            >-</button>
            <div className={`${styles.countLabel} ${className}`}>{value}</div>

            <button
                className={`${styles.buttonAdd} ${className}`}
                onClick={() => increaseBy(1)}
            >+</button>
        </div>
    )
}