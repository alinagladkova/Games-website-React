import styles from "./logo.module.scss";
import cn from "classnames";

export default function Logo() {
  return (
    <a className={cn(styles.logo)} href="#">
      <img src="freetogame-logo.png" alt="icon" />
    </a>
  );
}

//сюда линк на страницу-каталог
