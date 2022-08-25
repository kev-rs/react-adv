

export interface Props extends Style {
    product: Product;
    children?: JSX.Element | JSX.Element[];
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
    Btns:  (Props:Style) => JSX.Element;
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

