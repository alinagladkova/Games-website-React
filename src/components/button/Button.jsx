import styles from "./button.module.scss";
import cn from "classnames";

export default function Button({ use, icon, handler }) {
  return (
    <button className={cn(styles.btn, styles[`btn--${use}`])} onClick={handler}>
      {icon}
    </button>
  );
}
