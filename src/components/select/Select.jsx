import Option from "../option/Option";
import styles from "./select.module.scss";
import cn from "classnames";

export default function Select() {
  return (
    <select className={cn(styles.select)} name="" id="">
      <Option text="hrllo"></Option>
    </select>
  );
}
