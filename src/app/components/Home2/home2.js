"use client";
import React from "react";
import styles from "./Home.module.css";
import ChooseAVibe from "./ChooseAVibe/ChooseAVibe";
import SearchLikeYouTalk from "./SearchLikeYouTalk/SearchLikeYouTalk";
import ImageUploadDialog from "./ImageUploadDialog/ImageUploadDialog";
import Models from "./Models/Models";
const Home2 = () => {
  return (
    <div className={`${styles.Home2Wrapper} `}>
      <div className={`${styles.Home2} figtree`}>
        <ChooseAVibe />
        <SearchLikeYouTalk></SearchLikeYouTalk>
      </div>
      <div className={`${styles.Home2__ImageUploadWrapper}`}>
        <div className={`${styles.Home2__ImageUpload}`}>
          <ImageUploadDialog></ImageUploadDialog>
          <Models></Models>
        </div>
      </div>
    </div>
  );
};

export default Home2;
