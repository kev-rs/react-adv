import { createContext } from 'react';
import { Product } from '../models/shop.interfaces';

interface Store {
    value: number;
    increaseBy: (n:number) => void;
    product: Product;
    maxCount?: number;
}

export const ShopContext = createContext<Store>({} as Store);

export const { Provider } = ShopContext;