"use client";

import styles from "./HomeScreen.module.css";
// import Components from "../../Components";
import Resources from "@/app/resources/resources";
import { useEffect, useState } from "react";
import services from "../../services/services";
import Utilities from "../Utilities/Utilities";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "VIBE search",
};

export default function HomeScreen() {
  let [openMenu, setOpenMenu] = useState(false);
  let [userDetails, setUserDetails] = useState({});
  let [accessData, setAccessData] = useState({});
  useEffect(() => {
    services.getUserDetails(setUserDetails);
    services.getAccessToken(setAccessData);
  }, []);
  // console.log(accessData)
  console.log(userDetails);
  return (
    <>
      {" "}
      <div className={`${styles.homescreen__parent}`}>
        {Utilities.LeftMenu(openMenu, null, setOpenMenu)}
        <div
          className={`${styles.container}`}
          style={{
            background: openMenu ? "rgba(255,255,255,.5)" : "white",
          }}
          onClick={() => {
            if (openMenu) setOpenMenu(false);
          }}
        >
          {/* {JSON.stringify(userDetails)} */}
          {Utilities.HomeScreenHeader(setOpenMenu, userDetails)}
          <div className={styles.homescreen}>
            <div className={`${styles.homescreen__content}`}>
              <Utilities.VibeLogo></Utilities.VibeLogo>
              <div
                className={`${styles.content__mediumText} montserrat fontWeight800`}
              >
                Find Products You Love!
              </div>
              <div className={`${styles.content__smallText} cabin`}>
                Upload a photo or type in the vibe you&aposre looking for
              </div>
            </div>
            {Utilities.SearchBox("What are you looking for?", openMenu, "")}
          </div>
          <div className={`${styles.container__padding}`}></div>
        </div>
      </div>
    </>
  );
}
