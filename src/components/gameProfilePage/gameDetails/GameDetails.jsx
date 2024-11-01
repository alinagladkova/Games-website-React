import cn from "classnames";
import styles from "./gameDetails.module.scss";
import Button from "../../ui/button/Button";
import { Context } from "../../common/context/Context";
import { useContext } from "react";

export default function GameDetails({ data }) {
  const { thumbnail, release_date, developer, genre, publisher, minimum_system_requirements, short_description } = data;
  const setDownloadStatus = useContext(Context);

  const setStateDownloadStatus = () => {
    setDownloadStatus(true, thumbnail);
  };

  return (
    <div className={cn(styles["game-details"])}>
      <div className={cn(styles["game-details__thumbnail"])}>
        <img src={thumbnail} alt="img" />
      </div>
      <p className={cn(styles["game-details__short-description"])}>{short_description}</p>
      <div className={cn(styles["game-details__info"])}>
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
          <h6 className={cn(styles["minimum-system-requirements__title"])}>Minimum system requirements</h6>
          <ul className={cn(styles["minimum-system-requirements__list"])}>
            {Object.entries(minimum_system_requirements).map(([key, value]) => (
              <li className={cn(styles["inimum-system-requirements__item"])} key={key}>
                <span>{`${key.slice(0, 1).toUpperCase()}${key.slice(1)}:`}</span>
                {value}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Button use="download" text="Download" handler={setStateDownloadStatus} />
    </div>
  );
}
