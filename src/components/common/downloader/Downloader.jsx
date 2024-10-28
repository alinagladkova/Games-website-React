import { useState } from "react";
import styles from "./downloader.module.scss";
import cn from "classnames";

export default function Downloader({ downloadData }) {
  const { downloadStatus, thumbnail } = downloadData;

  return (
    <div className={cn(styles.downloader)} style={downloadStatus ? { display: "flex" } : { display: "none" }}>
      <div className={cn(styles[`downloader__icon`])}>
        <img src={thumbnail} alt="icon" />
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
