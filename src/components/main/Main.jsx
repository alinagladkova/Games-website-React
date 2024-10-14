import GamesList from "../gameList/GamesList";
import Sidebar from "../sidebar/Sidebar";
import styles from "./main.module.scss";
import cn from "classnames";

export default function Main() {
  return (
    <div className={cn(styles.main)}>
      <Sidebar></Sidebar>
      <GamesList></GamesList>
    </div>
  );
}
