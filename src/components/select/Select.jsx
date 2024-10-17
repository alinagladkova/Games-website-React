import Option from "../option/Option";
import styles from "./select.module.scss";
import cn from "classnames";

export default function Select({ name, optionArr }) {
  const getgenreArray = () => {
    console.log(optionArr);
    return optionArr.map((game) => {
      let genreArr = [];
      genreArr.push(game[name]);
      return genreArr;
    });

    // optionArr;
  };

  return (
    <select className={cn(styles.select)} name={name}>
      {optionArr.map((filterOption) => (
        <Option view={console.log(getgenreArray())} key={filterOption.id} text={filterOption[name]}></Option>
      ))}
    </select>
  );
}
