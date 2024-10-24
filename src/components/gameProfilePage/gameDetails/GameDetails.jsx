import cn from "classnames";
import styles from "./gameDetails.module.scss";

export default function GameDetails({ data }) {
  const getGameDetails = () => {
    //сюда должна приходить тнфа той карточки, на которую мы нажали
    // let neededGame = data.find((game) => {
    //   game.title === "Blade and Soul";
    // });
  };
  // console.log(data);

  return (
    <div className={cn(styles["game-details"])}>
      <div className={cn(styles["game-details__info"])}>
        <div className={cn(styles["game-details__thumbnail"])}>{/* <img src="" alt="img" /> */}</div>
        <h3 className={cn(styles["game-details__title"])}></h3>
        <p className={cn(styles["game-details__release-date"])}></p>
        {/* <p className="profile__release-date"></p> */}
        <p className={cn(styles["game-details__developer"])}></p>
        <p className={cn(styles["game-details__genre"])}></p>
      </div>
    </div>
  );
}
