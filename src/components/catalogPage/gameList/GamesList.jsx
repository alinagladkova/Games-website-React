import cn from "classnames";
import styles from "./gamesList.module.scss";
import GameCard from "../gameCard/GameCard";
import { useSearchParams } from "react-router-dom";

export default function GamesList({ data, inputValue }) {
  // const [searchParams, setsearchParams] = useSearchParams();
  // const gameQuery = searchParams.get("game") || ""; //для выдачи строки соответствующей

  return (
    <div className={cn(styles["games-list"])}>
      {data
        .filter((game) => {
          console.log(inputValue);
          console.log(game.title.includes(inputValue));
          return game.title.toLowerCase().includes(inputValue);
        })
        .map((gameCard) => (
          <GameCard key={gameCard.id} data={gameCard}></GameCard>
        ))}
    </div>
  );
}
