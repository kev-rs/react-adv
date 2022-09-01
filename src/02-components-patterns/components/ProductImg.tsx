import styles from '../styles/styles.module.css'
import noImg from '../assets/no-image.jpg'
import { useContext } from 'react';
import { ShopContext } from '../context/store';
import { Img } from '../models/shop.interfaces';

export const ProductImg = ({img, className}:Img) => {

    const { product } = useContext(ShopContext);

    let imgToShow:string;

    if(img) {
        imgToShow = img;
    }else if(product.img) {
        imgToShow = product.img;
    }else {
        imgToShow = noImg;
    }

    return (
        <div>
            <img className={`${styles.productImg}`} src={imgToShow} alt="Product" />
        </div>
    )
}

