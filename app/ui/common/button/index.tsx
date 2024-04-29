import { ButtonHTMLAttributes, HTMLAttributes } from "react";
import clsx from "clsx";
import styles from "./button.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
};

export default function Button({ className, children, ...props }: ButtonProps) {
  return (
    <button
      className={clsx(styles.button, className)}
      {...props}
    >
      {children}
    </button>
  );
}
