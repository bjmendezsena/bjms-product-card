import React, { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../../styles/styles.module.css";
import { BaseProps } from "../../interfaces/interfaces";

export interface Props extends BaseProps {}

export const ProductButtons = ({ className, style }: Props) => {
  const { increaseBy, counter, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );

  const isMinusDisabled = counter === 0;
  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button
        onClick={() => increaseBy(-1)}
        disabled={isMinusDisabled}
        className={`${styles.buttonMinus} ${
          isMinusDisabled && styles.minusDisabled
        }`}
      >
        -
      </button>
      <div className={styles.countLabel}>{counter}</div>
      <button
        onClick={() => increaseBy(1)}
        className={`${styles.buttonAdd} ${
          isMaxReached() && styles.addDisabled
        }`}
        disabled={isMaxReached()}
      >
        +
      </button>
    </div>
  );
};
