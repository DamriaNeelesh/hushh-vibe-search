"use client";
// import Resources from "@/app/resources/resources"
// import resources from "@/app/resources/resources"
import styles from "./GetStarted.module.css";
import services from "../../services/services";
import { useEffect, useState } from "react";
import Link from "next/link";
import Utilities from "../Utilities/Utilities";
import { useRouter } from "next/navigation";
import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: 'VIBE search'
// };

export default function GetStarted() {
  let [userDetails, setUserDetails] = useState({});
  let [isMobile, setIsMobile] = useState(false);
  const router = useRouter();
  useEffect(() => {
    services.getUserDetails(setUserDetails);
    services.getAccessToken(null);
    setIsMobile(services.isMobile());
  }, []);
  console.log(userDetails);
  function loginSuccess() {
    router.push("/components/HomeScreen");
    return <></>;
  }
  return (
    <>
      {!(userDetails["data"] && userDetails["data"]["user"]) ? (
        <div className={`${styles.getStarted}`}>
          {/* {JSON.stringify(userDetails)} */}
          <Utilities.VibeLogo></Utilities.VibeLogo>
          <div className={`${styles.getStarted__image}`}>
            {/* <img src={Resources.getStartedImage.src} alt="getStarted image" className={`${styles.image__component}`}></img> */}
          </div>
          <div className={`${styles.getStarted__buttons}`}>
            <div
              className={`${styles.getStarted__googleSignIn}`}
              onClick={async () => await services.googleSignIn()}
            >
              {/* <img className={`${styles.googleSignIn__googleSignInImage}`} src={Resources.googleSignInButton.src} > */}
              {/* </img> */}
            </div>
            <div className={`${styles.getStarted__googleSignIn}`}>
              <Link href={"/components/HomeScreen"}>
                <div className={`${styles.getStarted__guestLoginButton} cabin`}>
                  Guest mode
                </div>
              </Link>
            </div>
          </div>
          <div className={`${styles.getStarted__termsAndConditions} inter500`}>
            <div className={`${styles.termsAndConditions__content}`}>
              By using Vibe, you accept our
              <Link
                target="_blank"
                href={"https://www.hush1one.com/legal/termsofuse"}
              >
                <span className="underline">Terms of Service</span>
              </Link>
              &
              <Link
                target="_blank"
                href={"https://www.hush1one.com/legal/privacypolicy"}
              >
                <span className="underline">Privacy Policy</span>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        loginSuccess()
      )}
    </>
  );
}
