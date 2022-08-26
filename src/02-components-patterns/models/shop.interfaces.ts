//? TS

export interface Props extends Style {
    product: Product;
    children?: JSX.Element | JSX.Element[];
    onChange?: (Props:On_change) => void;
    counter?: number;
}

export interface On_change {
    product: Product;
    value: number;
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface Lib {
    ({children, product, className}:Props): JSX.Element;
    Img:   (Props:Img) => JSX.Element;
    Title: (Props:Title) => JSX.Element;
    Btns:  (Props:Btn) => JSX.Element;
}

export interface Style { 
    className?: string;
    style?: React.CSSProperties;
}

export interface Title extends Style {
    title?: string;
}

export interface Img extends Style {
    img?: string;
}

export interface Btn extends Style {
    value?: number;
}

