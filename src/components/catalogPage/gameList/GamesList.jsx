import cn from "classnames";
import styles from "./gamesList.module.scss";
import GameCard from "../gameCard/GameCard";
// import { Link } from "react-router-dom";

export default function GamesList({ data }) {
  return (
    <div className={cn(styles["games-list"])}>
      {data.map((gameCard) => (
        <GameCard key={gameCard.id} data={gameCard}></GameCard>
      ))}
    </div>
  );
}
