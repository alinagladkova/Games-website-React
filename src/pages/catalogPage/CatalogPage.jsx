import { useLoaderData } from "react-router-dom";

import { useState } from "react";
import GamesList from "../../components/catalogPage/gameList/GamesList";
import Sidebar from "../../components/catalogPage/sidebar/Sidebar";
import Control from "../../components/catalogPage/control/Control";

import styles from "./catalogPage.module.scss";
import cn from "classnames";

function CatalogPage() {
  const games = useLoaderData();
  const [searchValue, setSearchValue] = useState("");
  const [optionValue, setOptionValue] = useState("");
  const [filterState, setFilterState] = useState("");
  const [filterValue, setFilterValue] = useState({});

  const searchHandler = (inputValue) => {
    setSearchValue(inputValue);
  };

  const sortHandler = (optionValue) => {
    setOptionValue(optionValue);
  };

  const getFilterState = (filterState) => {
    setFilterState(filterState);
  };
  const checkHandler = (selectedFilters) => {
    setFilterValue(selectedFilters);
  };

  return (
    <>
      <Control inputValueHandler={searchHandler} sortValueHandler={sortHandler} getFilterStateHandler={getFilterState}></Control>
      <div className={cn(styles.catalog)}>
        <Sidebar filterState={filterState} checkHandler={checkHandler}></Sidebar>

        <GamesList data={games} inputValue={searchValue} sortValue={optionValue} filterState={filterState} filterValue={filterValue}></GamesList>
      </div>
    </>
  );
}

const gamesCatalogLoader = async () => {
  const url = "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc";
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "dd054139admsh0ba150c40ea21dfp1f0668jsnd6c925a75ebc",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  return res.json();
};

export { CatalogPage, gamesCatalogLoader };
