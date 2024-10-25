import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import styles from "./header.module.scss";
import cn from "classnames";

import Button from "../../../ui/button/Button";
import Input from "../../../ui/input/Input";
import Select from "../../../ui/select/Select.jsx";
import Logo from "../logo/Logo.jsx";

import { LuFilter } from "react-icons/lu";
import { MdOutlineSort } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";

export default function Header() {
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeSort, setActiveSort] = useState(false);
  // const [searchParams, setsearchParams] = useSearchParams();

  const setStateActiveSearch = () => {
    setActiveSearch((active) => !active);
  };

  const setStateActiveSort = () => {
    setActiveSort((active) => !active);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      setStateActiveSort();
      setStateActiveSearch();
    }
  };

  const inputHandler = (e, inputValue) => {
    // e.preventDefault();
    // setsearchParams({ game: inputValue });
    //обеспечить всплытие до GameList, передать туда
  };

  return (
    <header className={cn(styles.header)}>
      <div className={cn(styles["header__logo"])}>
        <Logo></Logo>
      </div>
      <div className={cn(styles["header__control"])}>
        <search className={cn(styles["header__search"])} style={activeSearch ? { display: ["inline-block"] } : { display: "none" }} onKeyDown={handleKeyDown}>
          <form>
            <div className={cn(styles["header__input"])}>
              <Input type="text" placeholder="Search" inputHandler={inputHandler}></Input>
            </div>
          </form>
        </search>
        <div className={cn(styles["header__sort"])} style={activeSort ? { display: ["inline-block"] } : { display: "none" }} onKeyDown={handleKeyDown}>
          <Select name="sort" optionArr={["Release date", "Popularity", "From A to Z", "From Z to A"]}></Select>
        </div>
        <Button use="search" icon={<RiSearchLine />} handler={setStateActiveSearch}></Button>
        <Button use="sort" icon={<MdOutlineSort />} handler={setStateActiveSort}></Button>
        <Button use="filter" icon={<LuFilter />}></Button>
      </div>
    </header>
  );
}

//// Игры можно отсортировать по дате релиза, популярности и тд
