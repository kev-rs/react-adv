import { useState } from "react"
import { On_change, Product } from "../models/shop.interfaces";

interface ProductInCart extends Product {
    counter: number;
}

export interface Cart {
    [key:string]: ProductInCart;
}

export const useCart = () => {
    const [cart, setCart] = useState<Cart>({});
      
    const handleChange = ({value, product}:On_change) => {
        setCart(prev => {
            const productInCart:ProductInCart = cart[product.id] || {...product, counter: 0}

            if(Math.max(productInCart.counter + value, 0) > 0) {
                productInCart.counter += value;
                return {...prev, [product.id]: productInCart};
            }

            const { [product.id]:toDelete, ...rest } = prev;
            return { ...rest };
        });
    };

    return { cart, handleChange };
};

