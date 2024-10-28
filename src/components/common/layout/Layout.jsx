import { Outlet } from "react-router-dom";
import Header from "../header/header/Header";

import styles from "./layout.module.scss";
import cn from "classnames";
import Downloader from "../downloader/Downloader";
import { useState } from "react";

export default function Layout() {
  const [searchValue, setSearchValue] = useState("");
  const [optionValue, setOptionValue] = useState("");
  const [filterState, setfilterState] = useState("");

  const searchHandler = (inputValue) => {
    setSearchValue(inputValue);
  };

  const sortHandler = (optionValue) => {
    setOptionValue(optionValue);
  };

  const getFilterState = (filterState) => {
    setfilterState(filterState);
  };

  return (
    <>
      <Header inputValueHandler={searchHandler} sortValueHandler={sortHandler} getFilterStateHandler={getFilterState}></Header>
      <Downloader></Downloader>
      <main className={cn(styles.container)}>
        <Outlet context={[searchValue, optionValue, filterState]} />
      </main>
    </>
  );
}
