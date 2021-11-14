import styles from "../../styles/styles.module.css";
import { useProduct } from "../../hooks/useProducts";
import React, { createContext } from "react";
import {
  BaseProps,
  Product,
  ProductContextProps,
  onChangeArgs,
  InitialValues,
  ProductCardHanlder,
} from "../../interfaces/interfaces";

export interface Props extends BaseProps {
  product: Product;
  // children?: React.ReactElement | React.ReactElement[];
  children: (args: ProductCardHanlder) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);

const { Provider } = ProductContext;

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increaseBy, maxCount, isMaxCountReached, reset } =
    useProduct({
      onChange,
      product,
      value,
      initialValues,
    });

  return (
    <Provider
      value={{
        product,
        counter,
        increaseBy,
        maxCount,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          increaseBy: increaseBy,
          isMaxCountReached,
          maxCount:initialValues?.maxCount,
          product,
          reset,
        })}
      </div>
    </Provider>
  );
};
