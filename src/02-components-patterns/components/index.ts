import { ProductCart } from './ProductCart'
import { ProductImg } from './ProductImg'
import { ProductTitle } from './ProductTitle'
import { ProductBtns } from './ProductBtns';
import { Pkg } from '../models/shop.interfaces';

export const Product:Pkg = Object.assign(ProductCart, {
    Img: ProductImg,
    Info: ProductTitle,
    Btn: ProductBtns,
})

