import { FC, CSSProperties } from "react";
import { Props as ProductCardProps } from "../components/ProductCard/ProductCard";
import { Props as TitleProps } from "../components/ProductCard/ProductTitle";
import { Props as ImageProps } from "../components/ProductCard/ProductImage";
import { Props as ButtonsProps } from "../components/ProductCard/ProductButtons";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface BaseProps {
  className?: string;
  style?: CSSProperties;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
  maxCount?: number;
}

export interface ProductCardHOCProps {
  (Props: ProductCardProps): JSX.Element;
  Title: FC<TitleProps>;
  Image: FC<ImageProps>;
  Buttons: FC<ButtonsProps>;
}
export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHanlder {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}
