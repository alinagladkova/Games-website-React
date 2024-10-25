import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import styles from "./filter.module.scss";
import cn from "classnames";
import Checkbox from "../../ui/checkbox/Checkbox.jsx";

export default function Filter({ data }) {
  const [checkedPlatform, setCheckedPlatform] = useState(new Array(2).fill(false));
  const [checkedGenre, setCheckedGenre] = useState(new Array(4).fill(false));
  const [searchParams, setsearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";

  const handlerSetStateCheckedPlatform = (position) => {
    const updatedCheckPlatform = checkedPlatform.map((el, i) => (i === position ? !el : el));
    setCheckedPlatform(updatedCheckPlatform);
  };

  const handlerSetStateCheckedGenre = (position) => {
    const updatedCheckGenre = checkedGenre.map((el, i) => (i === position ? !el : el));
    setCheckedGenre(updatedCheckGenre);
  };

  return (
    <form className={cn(styles.filter)}>
      <legend className={cn(styles["filter__title"])}>platform</legend>
      <div className={cn(styles["filter__holder"])}>
        {data
          .map((game) => game.platform)
          .filter((game, i, arr) => arr.indexOf(game) === i)
          .map((platform, i) => {
            return (
              <div className={cn(styles[`filter__inner`])} key={i}>
                <Checkbox id={i} label={platform} stateChecked={checkedPlatform[i]} checkboxHandler={() => handlerSetStateCheckedPlatform(i)} />
              </div>
            );
          })}
      </div>
      <legend className={cn(styles["filter__title"])}>genre</legend>
      <div className={cn(styles["filter__holder"])}>
        {data
          .map((game) => game.genre)
          .filter((game, i, arr) => arr.indexOf(game) === i)
          .map((genre, i) => {
            return (
              <div className={cn(styles[`filter__inner`])} key={i}>
                <Checkbox id={i} label={genre} stateChecked={checkedGenre[i]} checkboxHandler={() => handlerSetStateCheckedGenre(i)} />
              </div>
            );
          })}
      </div>
    </form>
  );
}
//checked
