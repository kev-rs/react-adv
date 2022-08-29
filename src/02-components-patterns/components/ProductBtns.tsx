import { useCallback, useContext, useMemo, useState } from 'react';
import { ShopContext } from '../context/store';
import { Btn } from '../models/shop.interfaces';
import styles from '../styles/styles.module.css'

// interface Check {
//     value?: number;
//     maxCount?: number;
// }

export const ProductBtns = ({className, style}:Btn) => {

    const { increaseBy, value, maxCount } = useContext(ShopContext);

    // const check = ({value, maxCount}:Check):boolean => value == maxCount && true;
    // const isMaxReached = useMemo(() => check({value, maxCount}), [value, maxCount]);
    // const isMaxReached = useMemo(() => !!maxCount && value === maxCount, [value, maxCount]);
    // console.log(isMaxReached);
    // const isMaxReached = () => !!maxCount && value === maxCount;
    const isMaxReached = useCallback(() => !!maxCount && value === maxCount, [value, maxCount]);
    console.log(isMaxReached());
    
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
                className={`${styles.buttonAdd} ${className} ${styles.disabled}`}
                disabled={isMaxReached()}
                onClick={() => increaseBy(1)}
            >+</button>
        </div>
    )
}

