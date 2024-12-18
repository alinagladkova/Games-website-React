import styles from "./control.module.scss";
import cn from "classnames";
import { useState, useEffect, useRef } from "react";

import Button from "../../ui/button/Button";
import Input from "../../ui/input/Input";
import Select from "../../ui/select/Select.jsx";

import { LuFilter } from "react-icons/lu";
import { MdOutlineSort } from "react-icons/md";
import { RiSearchLine } from "react-icons/ri";

export default function Control({ inputValueHandler, sortValueHandler, getFilterStateHandler }) {
  const [activeSearch, setActiveSearch] = useState(false);
  const [activeSort, setActiveSort] = useState(false);
  const [activeFilter, setActiveFilter] = useState(false);
  const searchRef = useRef(null);
  const sortRef = useRef(null);
  const searchButtonRef = useRef(null);
  const sortButtonRef = useRef(null);

  const setStateActiveFilter = () => {
    setActiveFilter((active) => !active);
  };

  const setStateActiveSearch = () => {
    setActiveSearch((active) => !active);
    if (activeSort) {
      setActiveSort(false);
    }
  };

  const setStateActiveSort = () => {
    setActiveSort((active) => !active);
    if (activeSearch) {
      setActiveSearch(false);
    }
  };

  useEffect(() => {
    getFilterStateHandler(activeFilter);
    return () => {};
  }, [activeFilter]);

  //обработчик клика вне элемента
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Проверяем клик вне поискового блока и его кнопки
      if (activeSearch && searchRef.current && !searchRef.current.contains(event.target) && !searchButtonRef.current.contains(event.target)) {
        setActiveSearch(false);
      }
      if (activeSort && sortRef.current && !sortRef.current.contains(event.target) && !sortButtonRef.current.contains(event.target)) {
        setActiveSort(false);
      }
    };

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        if (activeSearch) {
          setActiveSearch(false);
        }
        if (activeSort) {
          setActiveSort(false);
        }
      }
    };

    // Добавляем слушатели событий
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    // Удаляем слушатели событий при размонтировании компонента
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSearch, activeSort]);

  const inputHandler = (e, inputValue) => {
    e.preventDefault();
    inputValueHandler(inputValue);
  };

  const sortHandler = (e, optionValue) => {
    e.preventDefault();
    sortValueHandler(optionValue);
  };

  return (
    <div className={cn(styles.control)}>
      <div className={cn(styles["control__search"])} style={activeSearch ? { display: "inline-block" } : { display: "none" }} ref={searchRef}>
        <form>
          <div className={cn(styles["control__input"])}>
            <Input type="text" placeholder="Search" inputHandler={inputHandler} />
          </div>
        </form>
      </div>
      <div className={cn(styles["control__sort"])} style={activeSort ? { display: "inline-block" } : { display: "none" }} ref={sortRef}>
        <Select name="sort" optionArr={["Release date", "Popularity", "From A to Z", "From Z to A"]} sortHandler={sortHandler} />
      </div>
      <div className={cn(styles["control__buttons"])}>
        <div ref={searchButtonRef}>
          <Button use="search" icon={<RiSearchLine />} handler={setStateActiveSearch}></Button>
        </div>
        <div ref={sortButtonRef}>
          <Button use="sort" icon={<MdOutlineSort />} handler={setStateActiveSort}></Button>
        </div>
        <Button use="filter" icon={<LuFilter />} handler={setStateActiveFilter}></Button>
      </div>
    </div>
  );
}
