import styles from "./gameCard.module.scss";
import cn from "classnames";
import { Link } from "react-router-dom";

export default function GameCard({ data }) {
  const { title, thumbnail, release_date, publisher, id, genre } = data;

  return (
    <div className={cn(styles["game-card"])}>
      <div className={cn(styles["game-card__img"])}>
        <Link to={`/gameProfilePage/${id}`}>
          <img src={thumbnail} alt="picture" />
        </Link>
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
