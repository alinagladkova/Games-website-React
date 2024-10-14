import Filter from "../filter/Filter";
import styles from "./sidebar.module.scss";
import cn from "classnames";

export default function Sidebar() {
  return (
    <div className={cn(styles.sidebar)}>
      <Filter></Filter>
    </div>
  );
}
