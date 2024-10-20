import cn from "classnames";
import styles from "./gamesList.module.scss";
import GameCard from "../../gameProfilePage/gameCard/GameCard";

export default function GamesList({ data }) {
  return (
    <div className={cn(styles["games-list"])}>
      {data.map((gameCard) => (
        <GameCard key={gameCard.id} data={gameCard}></GameCard>
      ))}
    </div>
  );
}
