import styles from "./sort.module.scss";
import cn from "classnames";
import Option from "../option/Option";

export default function Sort({ data }) {
  let sortArray = ["Release date", "Popularity", "From A to Z", "From Z to A"];
  // console.log(releaseDate);

  return (
    <form className={cn(styles.sort)} action="#" method="post">
      <select className={cn(styles["sort__select-field"])} name={"hello"}>
        {sortArray.map((option) => (
          <Option key={option} text={option}></Option>
        ))}
      </select>
    </form>
  );
}
// Игры можно отсортировать по дате релиза, популярности и тд - подумать как сделать
