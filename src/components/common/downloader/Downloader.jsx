import { useState, useEffect } from "react";
import styles from "./downloader.module.scss";
import cn from "classnames";
import Button from "../../ui/button/Button";
import { MdClose } from "react-icons/md";

export default function Downloader({ downloadData, onClose }) {
  const { downloadStatus, thumbnail } = downloadData;
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  // Сбрасываем прогресс при новой загрузке
  useEffect(() => {
    if (downloadStatus) {
      setProgress(0);
      setIsComplete(false);
    }
  }, []);

  useEffect(() => {
    if (!downloadStatus) return;

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsComplete(true);
          }, 500);
          return 100;
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, [downloadStatus]);

  const onClickHandler = () => {
    setProgress(0);
    setIsComplete(false);
    onClose();
  };

  return (
    <div className={cn(styles.downloader)} style={downloadStatus ? { display: "flex" } : { display: "none" }}>
      <div className={cn(styles[`downloader__icon`])}>
        <img src={thumbnail} alt="icon" />
      </div>
      <div className={cn(styles[`downloader__wrapper`])} style={!isComplete ? { display: "inline-block" } : { display: "none" }}>
        <div className={cn(styles[`downloader__info`])}>
          <p className={cn(styles[`downloader__state`])}>Downloading... </p>
          <p className={cn(styles[`downloader__persentage`])}>{`${progress}%`}</p>
        </div>
        <div className={cn(styles[`downloader__area`])}>
          <div className={cn(styles[`downloader__progress`])} style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <div className={cn(styles[`downloader__wrapper-alternative`])} style={isComplete ? { display: "flex" } : { display: "none" }}>
        <p className={cn(styles[`downloader__message`])}>Downloading complete</p>
        <Button use="close" icon={<MdClose />} handler={onClickHandler}></Button>
      </div>
    </div>
  );
}
