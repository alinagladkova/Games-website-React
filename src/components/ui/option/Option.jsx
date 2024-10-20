import styles from "./option.module.scss";
import cn from "classnames";

export default function Option({ value, text }) {
  return (
    <option className={cn(styles.option)} value={value}>
      {text}
    </option>
  );
}
