import styles from "./gameCard.module.scss";
import cn from "classnames";

export default function GameCard({ data }) {
  const { title, thumbnail, short_description, release_date, publisher, platform, id, genre, game_url, freetogame_profile_url, developer } = data;

  //при клике совершается переход на страничку игры

  return (
    <div className={cn(styles["game-card"])}>
      <div className={cn(styles["game-card__img"])}>
        <img src={thumbnail} alt="picture" />
      </div>
      <h4 className={cn(styles["game-card__title"])}>{title}</h4>
      <div className={cn(styles["game-card__info"])}>
        <p className={cn(styles["game-card__release-date"])}>
          Release date:<span> {release_date}</span>
        </p>
        <p className={cn(styles["game-card__publisher"])}>{publisher}</p>
        <p className={cn(styles["game-card__genre"])}>{genre}</p>
      </div>
    </div>
  );
}
