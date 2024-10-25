import GameContent from "../../components/gameProfilePage/gameContent/GameContent";
import GameDetails from "../../components/gameProfilePage/gameDetails/GameDetails";
import Button from "../../components/ui/button/Button";
import { LuArrowLeft } from "react-icons/lu";
import cn from "classnames";
import styles from "./gameProfilePage.module.scss";
import { useLoaderData } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function GameProfilePage() {
  const { profile, id } = useLoaderData();

  const navigate = useNavigate();

  return (
    <div className={cn(styles["game-profile"])}>
      <div className={cn(styles["game-profile__back"])}>
        <Button use="back" icon={<LuArrowLeft />} handler={() => navigate(-1)}></Button>
      </div>
      <div className={cn(styles["game-profile__content"])}>
        <GameContent data={profile} id={id} />
        <GameDetails data={profile} id={id} />
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

const gamesProfileLoader = async ({ params }) => {
  const id = params.id;

  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
  const options = {
    method: "GET",
    headers: {
      "x-rapidapi-key": "dd054139admsh0ba150c40ea21dfp1f0668jsnd6c925a75ebc",
      "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
    },
  };
  const res = await fetch(url, options);
  const profile = await res.json();
  return { profile, id };
};

export { GameProfilePage, gamesProfileLoader };
