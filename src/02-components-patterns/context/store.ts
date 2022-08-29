import { createContext } from 'react';
import { Product } from '../models/shop.interfaces';

interface Store {
    increaseBy: (n:number) => void;
    value: number;
    product: Product;
    maxCount?: number;
}

export const ShopContext = createContext<Store>({} as Store);

export const { Provider } = ShopContext;