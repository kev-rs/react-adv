import { useContext } from "react";
import { ShopContext } from "../context/store";
import styles from '../styles/styles.module.css'


export const ProductTitle = ({title}:{title?:string}) => {

    const { product } = useContext(ShopContext);

    return (
        <span className={styles.productDescription}>{title ? title : product.title}</span>
    )
}