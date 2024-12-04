import cn from "classnames";
import styles from "./gamesList.module.scss";
import GameCard from "../gameCard/GameCard";

export default function GamesList({ data, inputValue, sortValue, filterState, filterValue }) {
  return (
    <div className={cn(styles["games-list"])} style={filterState ? { gridTemplateColumns: "repeat(3, 33.3%)" } : { gridTemplateColumns: "repeat(4, 25%)" }}>
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
        .filter((game) => {
          if (Object.keys(filterValue).length !== 0) {
            const platformMatched = filterValue.platform.length === 0 || filterValue.platform.includes(game.platform);
            const genreMatched = filterValue.genre.length === 0 || filterValue.genre.includes(game.genre);
            return platformMatched & genreMatched;
          }
        })
        .map((gameCard) => (
          <GameCard key={gameCard.id} data={gameCard}></GameCard>
        ))}
    </div>
  );
}
