import cn from "classnames";
import styles from "./gamesList.module.scss";
import GameCard from "../gameCard/GameCard";
import { useEffect, useState } from "react";

export default function GamesList() {
  const [gameCards, setgameCards] = useState([]);

  useEffect(() => {
    const url = "https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "dd054139admsh0ba150c40ea21dfp1f0668jsnd6c925a75ebc",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setgameCards(data))

      .catch((err) => console.log(err));

    return () => {};
  }, []);

  return (
    <div className={cn(styles["games-list"])}>
      {/* {console.log(gameCards)} */}
      {gameCards.map((gameCard) => (
        <GameCard key={gameCard.id} data={gameCard}></GameCard>
      ))}
    </div>
  );
}
