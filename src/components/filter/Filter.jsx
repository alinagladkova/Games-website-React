import Select from "../select/Select";
import styles from "./filter.module.scss";
import cn from "classnames";

export default function Filter() {
  return (
    <form className={cn(styles.filter)} action="#" method="post">
      <div className={cn(styles["filter__wrapper"])}>
        <h4 className={cn(styles["filter__title"])}>bhjbjnkj</h4>
        <div className={cn(styles["filter__holder"])}>
          <Select></Select>
        </div>
      </div>
    </form>
  );
}
// Игры можно отфильтровать по платформе и жанру (например, шутер)
// Игры можно отсортировать по дате релиза, популярности и тд
