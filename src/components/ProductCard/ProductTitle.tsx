import { ProductContext } from "./ProductCard";
import styles from "../../styles/styles.module.css";
import React, { useContext, FC } from "react";
import { BaseProps } from "../../interfaces/interfaces";

export interface Props extends BaseProps{
  title?: string;
}
export const ProductTitle: FC<Props> = ({ title, className , style}) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${styles.productDescription} ${className}`} style={style} >
      {title || product.title}
    </span>
  );
};
