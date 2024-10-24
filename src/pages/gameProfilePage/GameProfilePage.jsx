import GameContent from "../../components/gameProfilePage/gameContent/GameContent";
import GameDetails from "../../components/gameProfilePage/gameDetails/GameDetails";
import Button from "../../components/ui/button/Button";
import { LuArrowLeft } from "react-icons/lu";
import cn from "classnames";
import styles from "./gameProfilePage.module.scss";

export default function GameProfilePage({ data }) {
  //в хэндлер на кнопку подвязать линк переход на каталог
  return (
    <div className={cn(styles["game-profile"])}>
      <div className={cn(styles["game-profile__back"])}>
        <Button use="back" icon={<LuArrowLeft />}></Button>
      </div>
      <div className={cn(styles["game-profile__content"])}>
        <GameContent data={data} />
        <GameDetails data={data} />
      </div>
    </div>

    // <main className="profile">
    //   {"button--back"}
    //   <div className="profile__visual-data">
    //     {"swiper"}
    //     <div className="profile__description">
    //       <p></p>
    //     </div>
    //   </div>
    //   <div className="profile__info">
    //     <div className="profile__thumbnail">
    //       <img src="" alt="img" />
    //     </div>
    //     <h3 className="profile__title"></h3>
    //     <p className="profile__release-date"></p>
    //     <p className="profile__release-date"></p>
    //     <p className="profile__developer"></p>
    //     <p className="profile__genre"></p>
    //   </div>
    //   {"button--download"}
    // </main>
  );
}
