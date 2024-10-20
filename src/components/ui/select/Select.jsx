import styles from "./select.module.scss";
import cn from "classnames";
import Option from "../option/Option";

export default function Select({ name, optionArr }) {
  let sortArray = ["Release date", "Popularity", "From A to Z", "From Z to A"];
  console.log(optionArr);

  // console.log(releaseDate);

  return (
    <select className={cn(styles.select)} name={name}>
      {optionArr.map((option) => (
        <Option key={option} text={option}></Option>
      ))}
    </select>
  );
}
// Игры можно отсортировать по дате релиза, популярности и тд - подумать как сделать
//сделать переиспользуемым
