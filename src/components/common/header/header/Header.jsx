import styles from "./header.module.scss";
import cn from "classnames";
import Logo from "../logo/Logo";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={cn(styles.header)}>
      <Link className={cn(styles["header__logo"])} to={`/`}>
        <Logo />
      </Link>
    </header>
  );
}
