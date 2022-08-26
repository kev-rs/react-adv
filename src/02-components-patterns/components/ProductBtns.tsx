import { useContext, useEffect } from 'react';
import { ShopContext } from '../context/store';
import { Btn } from '../models/shop.interfaces';
import styles from '../styles/styles.module.css'

export const ProductBtns = ({className, style}:Btn) => {

    const { increaseBy, value } = useContext(ShopContext);

    // useEffect(() => {
    //     console.log(value);
    // }, [value])
    
    return (
        <div 
            className={styles.buttonsContainer}
            style={style}
        >
            <button 
                className={`${styles.buttonMinus} ${className}`}
                onClick={() => increaseBy(-1)}
            >-</button>

            <div 
                className={`${styles.countLabel} ${className}`}
            >{ value }</div>

            <button
                className={`${styles.buttonAdd} ${className}`}
                onClick={() => increaseBy(1)}
            >+</button>
        </div>
    )
}