"use client";
import React from "react";
import styles from "./LandingScreenContent.module.css";
import ChooseAVibe from "./ChooseAVibe/ChooseAVibe";
import SearchLikeYouTalk from "./SearchLikeYouTalk/SearchLikeYouTalk";
import ImageUploadDialog from "./ImageUploadDialog/ImageUploadDialog";
import Models from "./Models/Models";
const LandingScreenContent = () => {
  return (
    <div className={`${styles.LandingScreenContentWrapper} `}>
      <div className={`${styles.LandingScreenContent} figtree`}>
        <ChooseAVibe />
        <SearchLikeYouTalk></SearchLikeYouTalk>
      </div>
      <div className={`${styles.LandingScreenContent__ImageUploadWrapper}`}>
        <div className={`${styles.LandingScreenContent__ImageUpload}`}>
          <ImageUploadDialog></ImageUploadDialog>
          <Models></Models>
        </div>
      </div>
    </div>
  );
};

export default LandingScreenContent;
