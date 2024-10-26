import { Outlet } from "react-router-dom";
import Header from "../header/header/Header";

import styles from "./layout.module.scss";
import cn from "classnames";
import Downloader from "../downloader/Downloader";
import { useState } from "react";

export default function Layout() {
  const [searchValue, setSearchValue] = useState("");
  const searchHandler = (inputValue) => {
    setSearchValue(inputValue);
  };

  return (
    <>
      <Header inputValueHandler={searchHandler}></Header>
      <Downloader></Downloader>
      <main className={cn(styles.container)}>
        <Outlet context={searchValue} />
      </main>
    </>
  );
}
