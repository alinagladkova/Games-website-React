import cn from "classnames";
import styles from "./gameDetails.module.scss";

export default function GameDetails({ data }) {
  const { thumbnail, release_date, developer, genre, publisher, minimum_system_requirements, short_description } = data;
  //кнопка загрузить https://www.freetogame.com/mu-legend freetogame_profile_url
  return (
    <div className={cn(styles["game-details"])}>
      <div className={cn(styles["game-details__info"])}>
        <div className={cn(styles["game-details__thumbnail"])}>
          <img src={thumbnail} alt="img" />
        </div>
        <p className={cn(styles["game-details__short-description"])}>{short_description}</p>
        <p className={cn(styles["game-details__release-date"])}>
          <span>Release date:</span> {release_date}
        </p>
        <p className="game-details__publisher">
          <span>Publisher:</span> {publisher}
        </p>
        <p className={cn(styles["game-details__developer"])}>
          <span>Developer:</span> {developer}
        </p>
        <p className={cn(styles["game-details__genre"])}>
          <span>Genre:</span> {genre}
        </p>
        <div className={cn(styles["game-details__minimum-system-requirements"])}>
          <p>
            <span>{console.log(Object.keys(minimum_system_requirements))}</span>
            {Object.values(minimum_system_requirements)}
          </p>
          ;{/* {console.log(Object.entries(minimum_system_requirements))} */}
          {/* {minimum_system_requirements.map((game) => {

            // return Object.entries(game);
            // <p>
            //   <span>{game.key}</span>
            //   {game.value}
            // </p>;
          })} */}
        </div>
        {/* <p className={cn(styles["game-details__minimum-system-requirements"])}>
          <span>Minimum system requirements:</span> {minimum_system_requirements}
        </p> */}
      </div>
    </div>
  );
}
