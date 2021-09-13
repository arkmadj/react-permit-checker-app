import React from "react";
import styles from "./button.module.css"

export interface ButtonProps {
  text: string;
}

const ButtonComponent: React.FC<ButtonProps> = ({text, children}) => {
  return (
    <div className={styles.button}>
      {children}
      <span>{text}</span>
    </div>
  );
};

export default ButtonComponent;
