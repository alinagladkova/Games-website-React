import styles from "./checkbox.module.scss";
import cn from "classnames";

export default function Checkbox({ id, label, stateChecked, checkboxHandler }) {
  console.log(stateChecked);

  //checked={stateChecked}
  return (
    <>
      <input className={cn(styles.checkbox, styles[`${stateChecked ? "checkbox--checked" : ""}`])} type="checkbox" id={id} onChange={checkboxHandler} />
      <label htmlFor={label}>{label}</label>
    </>
  );
}
//почему не появляется класс checked?
