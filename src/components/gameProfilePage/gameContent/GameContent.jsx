import cn from "classnames";
import styles from "./gameContent.module.scss";
import Carousel from "../carousel/Carousel";

export default function GameContent({ data, id }) {
  return (
    <div className={cn(styles["game-content"])}>
      <div className={cn(styles["game-content__carousel"])}>
        <Carousel data={data} id={id}></Carousel>
      </div>
    </div>
  );
}
