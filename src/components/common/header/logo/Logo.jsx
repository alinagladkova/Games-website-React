import styles from "./logo.module.scss";
import cn from "classnames";

export default function Logo() {
  return (
    <div className={cn(styles.logo)}>
      <img src="freetogame-logo.png" alt="logo" />
    </div>
  );
}
