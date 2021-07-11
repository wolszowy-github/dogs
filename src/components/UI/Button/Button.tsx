import { ReactChild } from "react";
import styles from "./Button.module.scss";

interface IButtonProps {
  onClick: () => void;
  children: ReactChild;
}

export const Button = ({ onClick, children }: IButtonProps) => {
  return (
    <button className={styles["button"]} onClick={onClick}>
      {children}
    </button>
  );
};
