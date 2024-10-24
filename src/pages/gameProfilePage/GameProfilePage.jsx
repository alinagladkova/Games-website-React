import GameContent from "../../components/gameProfilePage/gameContent/GameContent";
import GameDetails from "../../components/gameProfilePage/gameDetails/GameDetails";
import Button from "../../components/ui/button/Button";
import { LuArrowLeft } from "react-icons/lu";
import cn from "classnames";
import styles from "./gameProfilePage.module.scss";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function GameProfilePage() {
  const { id } = useParams();
  const [gameInfo, setGameInfo] = useState({});

  useEffect(() => {
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "dd054139admsh0ba150c40ea21dfp1f0668jsnd6c925a75ebc",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => setGameInfo(data))

      .catch((err) => console.log(err));

    return () => {};
  }, [id]);

  return (
    <div className={cn(styles["game-profile"])}>
      <Link className={cn(styles["game-profile__back"])} to={`/`}>
        <Button use="back" icon={<LuArrowLeft />}></Button>
      </Link>
      <div className={cn(styles["game-profile__content"])}>
        <GameContent data={gameInfo} />
        <GameDetails data={gameInfo} />
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
