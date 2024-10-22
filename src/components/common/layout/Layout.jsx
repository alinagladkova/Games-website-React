import { Link, Outlet } from "react-router-dom";
import Header from "../header/header/Header";

import styles from "./layout.module.scss";
import cn from "classnames";
import Downloader from "../downloader/Downloader";

export default function Layout({ data }) {
  return (
    <>
      <Header data={data}></Header>
      <Downloader data={data}></Downloader>
      <main className={cn(styles.container)}>
        <Outlet data={data} />
      </main>
    </>
  );
}
