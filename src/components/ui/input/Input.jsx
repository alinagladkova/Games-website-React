import styles from "./input.module.scss";
import cn from "classnames";

export default function Input({ type, placeholder, inputHandler }) {
  const inputAction = (e) => {
    e.preventDefault();
    if (type === "text") {
      return inputHandler(e, e.target.value.trim());
    }
  };

  return <input className={cn(styles.input)} type={type} placeholder={placeholder} onChange={inputAction} />;
}
