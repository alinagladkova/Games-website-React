import styles from "./checkbox.module.scss";
import cn from "classnames";

export default function Checkbox({ id, label, stateChecked, onChange }) {
  return (
    <>
      <label htmlFor={label} className={cn(styles[`checkbox-wrapper`])}>
        <input className={cn(styles[`checkbox-element`])} type="checkbox" id={id} onChange={onChange} />
        <p>{label}</p>
      </label>
    </>
  );
}
