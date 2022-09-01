import { onChange } from "../pages/ShoppingPage";

export interface Pkg {
    ({children, onChange, className, initialValue}:Props): JSX.Element;
    Img: (Props:Img) => JSX.Element;
    Info: () => JSX.Element;
    Btn: () => JSX.Element;
}

export interface Props extends Styles{
    children: () => JSX.Element;
    product: Product;
    onChange: (Props:onChange) => void;
    counter: number;
    initialValue?: Initial_Value;
}

export interface Initial_Value {
    count?: number;
    maxCount?: number;
}

export interface Product {
    id:string;
    title:string;
    img?:string;
}

export interface Styles {
    className?:string;
} 

export interface Img extends Styles {
    img?: string;
}