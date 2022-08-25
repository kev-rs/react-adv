import { useContext } from "react";
import { ShopContext } from "../context/store";
import { Title } from "../models/shop.interfaces";
import styles from '../styles/styles.module.css'

export const ProductTitle = ({title, className}:Title) => {

    const { product } = useContext(ShopContext);

    return (
        <span className={`${styles.productDescription} ${className}`}>{title ? title : product.title}</span>
    )
}