import Header from "../header/header/Header";
import Downloader from "../downloader/Downloader";
import { Outlet } from "react-router-dom";
import { Context } from "../context/Context";

import { useState } from "react";

export default function Layout() {
  const [download, setDownload] = useState({ downloadStatus: false, thumbnail: "" });

  const handleDownloadStatus = (newDownloadStatus, gameThumbnail) => {
    setDownload({
      downloadStatus: newDownloadStatus,
      thumbnail: gameThumbnail,
    });
  };

  return (
    <>
      <Header></Header>
      <Downloader
        downloadData={download}
        onClose={() => {
          handleDownloadStatus(false, "");
        }}
      ></Downloader>
      <Context.Provider value={handleDownloadStatus}>
        <main>
          <Outlet />
        </main>
      </Context.Provider>
    </>
  );
}
