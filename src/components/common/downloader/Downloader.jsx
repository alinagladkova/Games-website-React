import styles from "./downloader.module.scss";
import cn from "classnames";

export default function Downloader({ data }) {
  console.log(data);

  return (
    <div className={cn(styles.downloader)}>
      <div className={cn(styles[`downloader__icon`])}>
        {/* <img src={test()} alt="icon" /> */}
        {/* <img src={data.find((game) => game.thumbnail === "https://www.freetogame.com/g/6/thumbnail.jpg").thumbnail} alt="icon" /> */}
      </div>
      <div className={cn(styles[`downloader__wrapper`])}>
        <div className={cn(styles[`downloader__info`])}>
          <p className={cn(styles[`downloader__state`])}>Downloading...</p>
          <p className={cn(styles[`downloader__persentage`])}>30%</p>
        </div>
        <div className={cn(styles[`downloader__area`])}>
          <div className={cn(styles[`downloader__progress`])}></div>
        </div>
      </div>
    </div>
  );
}
//добавить таймаут
