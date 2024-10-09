import cn from "classnames";
//sass
import GamesCard from "../gameCard/GameCard";

export default function GamesList() {
  return (
    <div className="games-list">
      <GamesCard></GamesCard>;
    </div>
    // <div className= cn(styles['games-list'])>
    //   <GamesCard></GamesCard>;
    // </div>
  );
}
