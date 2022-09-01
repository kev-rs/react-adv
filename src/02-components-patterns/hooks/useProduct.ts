import { useState, useRef, useEffect } from 'react';
import { Product, Initial_Value } from '../models/shop.interfaces';
import { onChange } from '../pages/ShoppingPage';

interface Props {
    product: Product;
    onChange: (Props:onChange) => void;
    counter: number;
    initialValue?: Initial_Value;
}

export const useProduct = ({product, onChange, counter, initialValue}:Props) => {
    const [ value, setValue ] = useState<number>(initialValue?.count!);

    const isControlled = useRef(!!onChange);
    const isMounted = useRef(false);

    const increaseBy = (n:number):void => {
        if(value === initialValue?.maxCount && n !== -1) return;

        if(isControlled) return onChange!({n, product, count: initialValue?.count});

        setValue(prev => Math.max(prev + n, 0)); // if is not controlled run this
    }

    useEffect(() => {
        if(!isMounted.current) return;
        setValue(counter);
    }, [counter]);

    useEffect(() => {
        isMounted.current = true;
    }, [])

    return {value, increaseBy};
}

