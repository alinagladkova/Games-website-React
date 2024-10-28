import Filter from "../filter/Filter";
import styles from "./sidebar.module.scss";
import cn from "classnames";

export default function Sidebar({ data, filterState }) {
  return (
    <div className={cn(styles.sidebar)} style={filterState ? { display: ["inline-block"] } : { display: "none" }}>
      <Filter data={data}></Filter>
    </div>
  );
}
