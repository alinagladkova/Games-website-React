import styles from "./select.module.scss";
import cn from "classnames";
import Option from "../option/Option";

export default function Select({ name, optionArr, sortHandler }) {
  const changeAction = (e) => {
    if (name === "sort") {
      return sortHandler(e, e.target.value);
    }
  };
  return (
    <select className={cn(styles.select)} name={name} onChange={changeAction}>
      {optionArr.map((option) => (
        <Option key={option} text={option}></Option>
      ))}
    </select>
  );
}
