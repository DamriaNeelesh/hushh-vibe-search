// Definition: Header component for the AboutUs page
"use client";
import styles from "./Header.module.css";
import resources from "../../../resources/resources";
import { useEffect } from "react";
export default function Header(props) {
  useEffect(() => {
    console.log("page", props.page);
  }, [props.page]);
  return (
    <div className={`${styles.Header} figtree`}>
      <img
        className={styles.Header__Logo}
        src={resources.images.VibeLogo.src}
      ></img>
      <div className={styles.Header__Pages}>
        <div
          className={styles.Header__PageBox}
          onClick={() => {
            props.setPage("about");
          }}
        >
          <div className={styles.Header__AboutUs}>About</div>
          {props.page == "about" ? (
            <div className={styles.Header__UnderLine}></div>
          ) : (
            <></>
          )}
        </div>
        <div
          className={styles.Header__PageBox}
          onClick={() => {
            props.setPage("contact");
          }}
        >
          <div className={styles.Header__ContactUs}>Contact Us</div>
          {props.page == "contact" ? (
            <div className={styles.Header__UnderLine}></div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
