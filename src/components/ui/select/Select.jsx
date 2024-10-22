import styles from "./select.module.scss";
import cn from "classnames";
import Option from "../option/Option";

export default function Select({ name, optionArr }) {
  return (
    <select className={cn(styles.select)} name={name}>
      {optionArr.map((option) => (
        <Option key={option} text={option}></Option>
      ))}
    </select>
  );
}
