import { Link, Outlet } from "react-router-dom";
import Header from "../header/header/Header";

import styles from "./layout.module.scss";
import cn from "classnames";

export default function Layout({ data }) {
  return (
    <>
      <Header data={data}></Header>
      <main className={cn(styles.container)}>
        <Outlet data={data} />
      </main>
    </>
  );
}
