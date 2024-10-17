import Button from "../button/Button";
import styles from "./header.module.scss";
import cn from "classnames";
import { useState } from "react";

import { LuFilter } from "react-icons/lu";
import { MdOutlineSort } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";
import Search from "../search/Search";

export default function Header() {
  const [active, setActive] = useState(false);
  const [input, setInput] = useState("");
  // const [key, setKey] = useState("");

  const setStateActive = () => {
    setActive((active) => !active);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setStateActive();
    }
  };

  const inputHandler = (inputValue) => {
    console.log(inputValue);
    //обеспечить всплытие до GameList, передать туда
  };

  return (
    <header className={cn(styles.header)}>
      <a className={cn(styles["header__logo"])} href="#">
        <img src="freetogame-logo.png" alt="icon" />
      </a>
      <div className={cn(styles["header__control"])}>
        <div className={cn(styles["header__search"])} style={active ? { display: ["inline-block"] } : { display: "none" }} onKeyDown={handleKeyDown}>
          <Search inputHandler={inputHandler}></Search>
        </div>
        <Button use="search" icon={<RiSearchLine />} handler={setStateActive}></Button>
        <Button use="sort" icon={<MdOutlineSort />}></Button>
        <Button use="filter" icon={<LuFilter />}></Button>
      </div>
    </header>
  );
}
