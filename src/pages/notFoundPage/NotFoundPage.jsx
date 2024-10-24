import styles from "./notFoundPage.module.scss";
import cn from "classnames";

export default function NotFoundPage() {
  return <div className={cn(styles["notFound-page"])}>The game is not found. Please, try later.</div>;
}
