import React, { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../../assets/no-image.jpg";
import styles from "../../styles/styles.module.css";
import { BaseProps } from "../../interfaces/interfaces";

export interface Props extends BaseProps{
  img?: string;
}

export const ProductImage = ({ img = "", className , style}: Props) => {
  const { product } = useContext(ProductContext);

  let imgToShow;
  if (img) {
    imgToShow = img;
  } else if (product.img) {
    imgToShow = product.img;
  } else {
    imgToShow = noImage;
  }

  return (
    <img
      className={`${styles.productImg} ${className}`}
      src={imgToShow}
      alt='Product'
      style={style}
    />
  );
};
