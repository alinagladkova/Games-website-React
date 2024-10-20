import { useState } from "react";
import Input from "../../ui/input/Input.jsx";

// import Select from "../../ui/select/Select.jsx";

import styles from "./filter.module.scss";
import cn from "classnames";

export default function Filter({ data }) {
  const [checked, setChecked] = useState(false);

  const setStateChecked = () => {
    setChecked((checked) => !checked);
  };
  return (
    <form className={cn(styles.filter)}>
      <legend className={cn(styles["filter__title"])}>platform</legend>
      <div className={cn(styles["filter__holder"])}>
        {data
          .map((game) => game.platform)
          .filter((game, i, arr) => arr.indexOf(game) === i)
          .map((option) => {
            return (
              <div className={cn(styles[`filter__inner`], styles[`${checked ? "--checked" : ""}`])} key={option} onClick={setStateChecked}>
                <div className={cn(styles["filter__input"])}>
                  <Input type="checkbox" id={option} name={option}></Input>
                </div>
                <label className={cn(styles["filter__label"])}>{option}</label>
              </div>
            );
          })}
      </div>
      <legend className={cn(styles["filter__title"])}>genre</legend>
      <div className={cn(styles["filter__holder"])}>
        {data
          .map((game) => game.genre)
          .filter((game, i, arr) => arr.indexOf(game) === i)
          .map((option) => {
            return (
              <div className={cn(styles["filter__inner"])} key={option}>
                <div className={cn(styles["filter__input"])}>
                  <Input type="checkbox" id={option} name={option}></Input>
                </div>
                <label className={cn(styles["filter__label"])}>{option}</label>
              </div>
            );
          })}
      </div>
    </form>
  );
}
//checked
