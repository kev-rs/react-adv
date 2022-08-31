export interface Initial_Value {
  count?: number;
  maxCount?: number;
}

export interface Props extends Style {
  product: Product;
  children: (Args:Cart_args) => JSX.Element;
  onChange?: (Props:On_Change) => void;
  counter?: number;
  initialValue?: Initial_Value;
}

export interface Cart_args {
  count: number;
  isMaxReached: boolean;
  maxCount?: number;
  product: Product;
  
  increaseBy: (value:number) => void;
  reset: () => void;
}

export interface On_Change {
  product: Product;
  value: number;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface Lib {
  ({ children, product, className }: Props): JSX.Element;
  Img: (Props:Img) => JSX.Element;
  Title: (Props:Title) => JSX.Element;
  Btns: (Props:Btn) => JSX.Element;
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
  // count: number;
  // isMaxReached: boolean;
  // increaseBy: (value:number) => void;
  // reset: () => void;
}
