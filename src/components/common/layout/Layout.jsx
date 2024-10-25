import { Link, Outlet } from "react-router-dom";
import Header from "../header/header/Header";

import styles from "./layout.module.scss";
import cn from "classnames";
import Downloader from "../downloader/Downloader";

export default function Layout() {
  //получить сюда то, что мы вбиваем в поисковик и отправить дальше
  return (
    <>
      <Header></Header>
      <Downloader></Downloader>
      <main className={cn(styles.container)}>
        <Outlet />
      </main>
    </>
  );
}
