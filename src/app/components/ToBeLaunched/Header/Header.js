import resources from "../../../resources/resources";
import styles from "./Header.module.css";
import { useEffect } from "react";
import services from "../../../services/services";
import { useState } from "react";
export default function Header() {
  let [userDetails, setUserDetails] = useState(null);
  useEffect(() => {
    setInterval(() => {
      userDetails == null
        ? services.authentication.getUserDetails(setUserDetails)
        : "";
    }, 1000);
  }, []);

  return (
    <div className={`${styles.Header}`}>
      <div className={`${styles.Header__Wrapper}`}>
        <img
          className={`${styles.Header__VibeLogo}`}
          src={resources.images.VibeLogo.src}
        ></img>
        <img
          className={`${styles.Header__GuestAccount}`}
          src={
            userDetails?.data?.user?.user_metadata?.avatar_url
              ? userDetails?.data?.user?.user_metadata?.avatar_url
              : resources.images.GuestAccount.src
          }
          width={'30px'}
          height={'30px'}
        ></img>
      </div>
    </div>
  );
}
