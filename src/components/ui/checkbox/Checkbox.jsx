import styles from "./checkbox.module.scss";
import cn from "classnames";

export default function Checkbox({ id, label, stateChecked, checkboxHandler }) {
  return (
    <>
      <input className={cn(styles.checkbox)} type="checkbox" id={id} onChange={checkboxHandler} />
      <label htmlFor={label}>
        {label}
        {stateChecked ? " (Checked)" : " (Unchecked)"}
      </label>
    </>
  );
}
