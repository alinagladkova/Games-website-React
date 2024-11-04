import { useEffect, useState } from "react";
import styles from "./filter.module.scss";
import cn from "classnames";
import Checkbox from "../../ui/checkbox/Checkbox.jsx";
import { filterConfig } from "./filterConfig";

export default function Filter({ handleCheck }) {
  let initialState = Object.fromEntries(
    Object.entries(filterConfig).map(([category, { options }]) => [category, Object.fromEntries(options.map((option) => [option.id, false]))])
  );
  const [checkedState, setCheckedState] = useState(initialState);

  const handlerSetStateCheckedPlatform = (category, id) => {
    setCheckedState((prev) => {
      return {
        ...prev,
        [category]: {
          ...prev[category],
          [id]: !prev[category][id],
        },
      };
    });
  };

  useEffect(() => {
    const selectedFilters = Object.entries(checkedState).reduce((acc, [category, values]) => {
      acc[category] = Object.entries(values)
        .filter(([_, isChecked]) => isChecked)
        .map(([id]) => id);
      return acc;
    }, {});
    handleCheck(selectedFilters);
  }, [checkedState]);

  return (
    <form className={cn(styles.filter)}>
      {Object.entries(filterConfig).map(([category, { title, options }]) => {
        return (
          <div className={cn(styles["filter__category"])} key={category}>
            <legend className={cn(styles["filter__title"])}>{title} </legend>
            {options.map(({ id, label }) => {
              return (
                <div className={cn(styles[`filter__inner`])} key={id}>
                  <Checkbox key={id} id={id} label={label} onChange={() => handlerSetStateCheckedPlatform(category, id)} />
                </div>
              );
            })}
          </div>
        );
      })}
    </form>
  );
}
