import resources from "../../../resources/resources";
import styles from "./Header.module.css";
import { useEffect } from "react";
export default function Header() {
  
  return (
    <div className={`${styles.Header}`}>
      <div className={`${styles.Header__Wrapper}`}>
        <img
          className={`${styles.Header__VibeLogo}`}
          src={resources.images.VibeLogo.src}
        ></img>
        <img
          className={`${styles.Header__GuestAccount}`}
          src={resources.images.GuestAccount.src}
        ></img>
      </div>
    </div>
  );
}
