import Filter from "../filter/Filter";
import styles from "./sidebar.module.scss";
import cn from "classnames";

export default function Sidebar({ data }) {
  return (
    <div className={cn(styles.sidebar)}>
      <Filter data={data}></Filter>
    </div>
  );
}
