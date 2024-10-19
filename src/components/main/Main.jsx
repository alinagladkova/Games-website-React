import GamesList from "../gameList/GamesList";
import Sidebar from "../sidebar/Sidebar";
import styles from "./main.module.scss";
import cn from "classnames";

export default function Main({ data }) {
  return (
    <div className={cn(styles.main)}>
      <Sidebar data={data}></Sidebar>
      <GamesList data={data}></GamesList>
    </div>
  );
}
