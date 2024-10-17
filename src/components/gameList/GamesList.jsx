import cn from "classnames";
import styles from "./gamesList.module.scss";
import GameCard from "../gameCard/GameCard";

export default function GamesList({ data }) {
  return (
    <div className={cn(styles["games-list"])}>
      {/* {console.log(data)} */}
      {data.map((gameCard) => (
        <GameCard key={gameCard.id} data={gameCard}></GameCard>
      ))}
    </div>
  );
}
