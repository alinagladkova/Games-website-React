import styles from "./search.module.scss";
import cn from "classnames";

export default function Search({ inputHandler }) {
  return (
    <input
      className={cn(styles.search)}
      type="text"
      placeholder="Search"
      onChange={(e) => {
        inputHandler(e.target.value.trim());
      }}
    />
  );
}
