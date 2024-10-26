import { useLoaderData, useOutletContext } from "react-router-dom";
import GamesList from "../../components/catalogPage/gameList/GamesList";
import Sidebar from "../../components/catalogPage/sidebar/Sidebar";

function CatalogPage() {
  const games = useLoaderData();
  const inputValue = useOutletContext();

  return (
    <>
      <Sidebar data={games}></Sidebar>
      <GamesList data={games} inputValue={inputValue}></GamesList>
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
