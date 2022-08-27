import { useEffect, useState, useRef } from 'react';
import { Product, On_change } from '../models/shop.interfaces';

export interface Args {
    product: Product;
    onChange?: (Props:On_change) => void;
    counter?: number;
}

export const useProduct = ({onChange, product, counter=0}:Args) => {
    
    const [value, setValue] = useState(0);

    const isControlled = useRef(!!onChange);
    
    const increaseBy = (n:number) => {

        if(isControlled.current) return onChange!({value: n, product});
        
        const newValue = Math.max(value + n, 0)
        setValue(newValue);
        onChange && onChange({value: newValue, product});
    }

    useEffect(() => {
        setValue(counter);
    }, [counter]);

    return { value, increaseBy };
}

