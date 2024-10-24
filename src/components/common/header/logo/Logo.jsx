import styles from "./logo.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link className={cn(styles.logo)} to={`/`}>
      <img src="freetogame-logo.png" alt="icon" />
    </Link>
  );
}
