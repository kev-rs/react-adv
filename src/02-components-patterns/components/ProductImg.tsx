import { useContext } from 'react'
import { ShopContext } from '../context/store';
import styles from '../styles/styles.module.css'
import noImg from '../assets/no-image.jpg'
import { Img } from '../models/shop.interfaces';

export const ProductImg = ({img}:Img) => {

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
        <img className={`${styles.productImg}`} src={imgToShow} alt="Product" />
    )
}

