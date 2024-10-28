import { useState, useEffect } from "react";
import styles from "./downloader.module.scss";
import cn from "classnames";
import Button from "../../ui/button/Button";
import { MdClose } from "react-icons/md";

export default function Downloader({ downloadData }) {
  const { downloadStatus, thumbnail } = downloadData;
  // const [downloadState, setDownloadState] = useState(downloadStatus);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 100;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const onClickHandler = () => {
    return !downloadStatus;
  };

  // useEffect(() => {
  // }, [downloadStatus]);

  return (
    <div className={cn(styles.downloader)} style={downloadStatus ? { display: "flex" } : { display: "none" }}>
      <div className={cn(styles[`downloader__icon`])}>
        <img src={thumbnail} alt="icon" />
      </div>
      <div className={cn(styles[`downloader__wrapper`])} style={progress !== 100 ? { display: "inline-block" } : { display: "none" }}>
        <div className={cn(styles[`downloader__info`])}>
          <p className={cn(styles[`downloader__state`])}>Downloading...</p>
          <p className={cn(styles[`downloader__persentage`])}>{`${progress}%`}</p>
        </div>
        <div className={cn(styles[`downloader__area`])}>
          <div className={cn(styles[`downloader__progress`])} style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <div className={cn(styles[`downloader__wrapper-alternative`])} style={progress === 100 ? { display: "flex" } : { display: "none" }}>
        <p className={cn(styles[`downloader__message`])}>Downloading complete</p>
        <Button use="close" icon={<MdClose />} handler={onClickHandler}></Button>
      </div>
    </div>
  );
}
//добавить таймаут и кнопку закрыть
