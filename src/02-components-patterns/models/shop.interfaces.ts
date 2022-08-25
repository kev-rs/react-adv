export interface Props {
    product: Product;
    children?: JSX.Element | JSX.Element[];
}

export interface Product {
    id: string;
    title: string;
    img?: string;
}

export interface Lib {
    ({children, product}:Props): JSX.Element;
    Img: ( {img}:{img?:string} ) => JSX.Element;
    Title: ({title}:{title?:string}) => JSX.Element;
    Btns: () => JSX.Element;
}

