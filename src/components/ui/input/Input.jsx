import { useState } from "react";
import styles from "./input.module.scss";
import cn from "classnames";

export default function Input({ type, placeholder, id, name, inputHandler }) {
  const [checked, setChecked] = useState(false);

  const setStateChecked = () => {
    setChecked((checked) => !checked);
  };

  return (
    <input
      className={cn(styles.input)}
      type={type}
      placeholder={placeholder}
      id={id}
      name={name}
      onChange={(e) => {
        inputHandler(e.target.value.trim());
      }}
    />
  );
}
