import cn from "classnames";
import styles from "./gamesList.module.scss";
import GameCard from "../gameCard/GameCard";

export default function GamesList({ data, inputValue, sortValue }) {
  return (
    <div className={cn(styles["games-list"])}>
      {data
        .filter((game) => {
          return game.title.toLowerCase().includes(inputValue);
        })
        .sort((a, b) => {
          const game1 = a.title.toUpperCase(); // ignore upper and lowercase
          const game2 = b.title.toUpperCase(); // ignore upper and lowercase
          // сортировать по Release date
          if (sortValue === "Release date") {
            if (a.release_date < b.release_date) return -1;
            if (a.release_date > b.release_date) return 1;
            return 0;
          }
          // сортировать по from A to Z
          if (sortValue === "From A to Z") {
            if (game1 < game2) return -1;
            if (game1 > game2) return 1;
            return 0;
          }
          //сортировать по from Z to A
          if (sortValue === "From Z to A") {
            if (game1 < game2) return 1;
            if (game1 > game2) return -1;
            return 0;
          }
        })
        .map((gameCard) => (
          <GameCard key={gameCard.id} data={gameCard}></GameCard>
        ))}
    </div>
  );
}
