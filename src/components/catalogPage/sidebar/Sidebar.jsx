import Filter from "../filter/Filter";
import styles from "./sidebar.module.scss";
import cn from "classnames";

export default function Sidebar({ filterState, checkHandler }) {
  const handleCheck = (filterData) => {
    checkHandler(filterData);
  };
  return (
    <div className={cn(styles.sidebar)} style={filterState ? { display: ["inline-block"] } : { display: "none" }}>
      <Filter handleCheck={handleCheck}></Filter>
    </div>
  );
}
