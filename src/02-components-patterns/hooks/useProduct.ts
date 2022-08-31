import { useEffect, useState, useRef } from "react";
import { Product, On_Change, Initial_Value } from "../models/shop.interfaces";

export interface Args {
  product: Product;
  onChange?: (Props: On_Change) => void;
  counter?: number;
  initialValue?: Initial_Value;
}

export const useProduct = ({ onChange, product, counter = 0, initialValue }: Args) => {
  const [value, setValue] = useState<number>(initialValue?.count || counter);

  const isControlled = useRef(!!onChange);
  const isMounted = useRef(false);

  const increaseBy = (n:number):void => {
    // ? 1 - option
    if (value === initialValue?.maxCount && n !== -1) return; // stop when value reach his max value
    //? 2 - option
    // if(initialValue?.maxCount) newValue = Math.min(newValue, initialValue.maxCount);

    if (isControlled.current) return onChange!({ value: n, product }); // if onChange exists

    const newValue = Math.max(value + n, 0);
    setValue(newValue);
    onChange && onChange({ value: newValue, product });
  };

	const reset = ():void => {
		setValue(initialValue?.count || counter);
	}

  useEffect(() => {
    if (!isMounted.current) return;
    setValue(counter); // not run until isMounted = true;
  }, [counter]);

  // once the component or hook has been used, isMounted = true
  useEffect(() => {
    isMounted.current = true;
  }, []);

  return { 
		value, 
		increaseBy,
		isMaxReached: !!initialValue?.count && initialValue.maxCount === value,
		reset,
	};
};

