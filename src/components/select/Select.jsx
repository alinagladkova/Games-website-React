import Option from "../option/Option";
import styles from "./select.module.scss";
import cn from "classnames";

export default function Select({ name, optionArr }) {
  return (
    <select className={cn(styles.select)} name={name}>
      {optionArr
        .map((game) => game[name])
        .filter((game, i, arr) => arr.indexOf(game) === i)
        .map((option) => (
          <Option key={option} text={option}></Option>
        ))}
    </select>
  );
}
