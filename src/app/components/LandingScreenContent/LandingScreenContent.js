"use client";
import React from "react";
import styles from "./LandingScreenContent.module.scss";
import ChooseAVibe from "./ChooseAVibe/ChooseAVibe";
import SearchLikeYouTalk from "./SearchLikeYouTalk/SearchLikeYouTalk";
import ImageUploadDialog from "./ImageUploadDialog/ImageUploadDialog";
import Models from "./Models/Models";
import ModelsMobile from "./ModelsMobile/ModelsMobile";
import utilities from "../utilities/utilities";
import figtree from "../../fonts/Figtree";
const LandingScreenContent = () => {
  return (
    <div className={`${styles.LandingScreenContentWrapper} `}>
      <div className={`${styles.LandingScreenContent} ${figtree.className}`}>
        <ChooseAVibe />
        <SearchLikeYouTalk></SearchLikeYouTalk>
      </div>
      <div className={`${styles.LandingScreenContent__ImageUploadWrapper}`}>
        <div className={`${styles.LandingScreenContent__ImageUpload}`}>
          <ImageUploadDialog></ImageUploadDialog>
          <Models></Models>
        </div>
      </div>
      <ModelsMobile></ModelsMobile>

      <utilities.Footer></utilities.Footer>
    </div>
  );
};

export default LandingScreenContent;
