import cn from "classnames";
import styles from "./gamesList.module.scss";
import GameCard from "../gameCard/GameCard";
import { useSearchParams } from "react-router-dom";

export default function GamesList({ data }) {
  const [searchParams, setsearchParams] = useSearchParams();
  const gameQuery = searchParams.get("game") || "";

  return (
    <div className={cn(styles["games-list"])}>
      {data
        // .filter((game) => game.title.includes(gameQuery))
        .map((gameCard) => (
          <GameCard key={gameCard.id} data={gameCard}></GameCard>
        ))}
    </div>
  );
}
