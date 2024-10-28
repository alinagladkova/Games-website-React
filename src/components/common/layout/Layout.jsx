import Header from "../header/header/Header";
import Downloader from "../downloader/Downloader";
import { Outlet } from "react-router-dom";
import { Context } from "../context/Context";

import styles from "./layout.module.scss";
import cn from "classnames";
import { useState } from "react";

export default function Layout() {
  const [searchValue, setSearchValue] = useState("");
  const [optionValue, setOptionValue] = useState("");
  const [filterState, setfilterState] = useState("");
  const [download, setDownload] = useState({ downloadStatus: false, thumbnail: "" });

  const searchHandler = (inputValue) => {
    setSearchValue(inputValue);
  };

  const sortHandler = (optionValue) => {
    setOptionValue(optionValue);
  };

  const getFilterState = (filterState) => {
    setfilterState(filterState);
  };

  const handleDownloadStatus = (newDownloadStatus, gameThumbnail) => {
    setDownload({
      downloadStatus: newDownloadStatus,
      thumbnail: gameThumbnail,
    });
  };

  return (
    <>
      <Header inputValueHandler={searchHandler} sortValueHandler={sortHandler} getFilterStateHandler={getFilterState}></Header>
      <Downloader downloadData={download}></Downloader>
      <Context.Provider value={handleDownloadStatus}>
        <main className={cn(styles.container)}>
          <Outlet context={[searchValue, optionValue, filterState]} />
        </main>
      </Context.Provider>
    </>
  );
}
