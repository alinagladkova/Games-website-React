import Select from "../select/Select";
import styles from "./filter.module.scss";
import cn from "classnames";

export default function Filter({ data }) {
  console.log(data);

  return (
    <form className={cn(styles.filter)} action="#" method="post">
      <div className={cn(styles["filter__inner"])}>
        <h4 className={cn(styles["filter__title"])}>platform</h4>
        <div className={cn(styles["filter__holder"])}>
          <Select
            name="platform"
            optionArr={data.map((game) => {
              return { id: game.id, platform: game.platform };
            })}
          ></Select>
        </div>
      </div>
      <div className={cn(styles["filter__inner"])}>
        <h4 className={cn(styles["filter__title"])}>genre</h4>
        <div className={cn(styles["filter__holder"])}>
          <Select
            name="genre"
            optionArr={data.map((game) => {
              return { id: game.id, genre: game.genre };
            })}
          ></Select>
        </div>
      </div>
    </form>
  );
}
// Игры можно отфильтровать по платформе и жанру (например, шутер)
// Игры можно отсортировать по дате релиза, популярности и тд
