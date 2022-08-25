import { ProductCart as ProductCartHOC } from './ProductCart';
import { ProductImg } from './ProductImg';
import { ProductTitle } from './ProductTitle';
import { ProductBtns } from './ProductBtns';
import { Lib } from '../models/shop.interfaces';


export { ProductImg } from './ProductImg';
export { ProductTitle } from './ProductTitle';
export { ProductBtns } from './ProductBtns';



export const ProductCart:Lib = Object.assign(ProductCartHOC, {
    Img: ProductImg,
    Title: ProductTitle,
    Btns: ProductBtns,
})

// export default ProductCart;
