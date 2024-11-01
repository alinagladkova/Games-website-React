import styles from "./header.module.scss";
import cn from "classnames";

import Logo from "../logo/Logo";

export default function Header() {
  return (
    <header className={cn(styles.header)}>
      <div className={cn(styles["header__logo"])}>
        <Logo />
      </div>
    </header>
  );
}
