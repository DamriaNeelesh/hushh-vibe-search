import styles from "./Description.module.scss";
import services from "../../../services/services";
import { useEffect, useState, useMemo } from "react";
import DynamicSignInWrapper from "./DynamicSignInWrapper/DynamicSignInWrapper";
import figtree from "../../../fonts/Figtree";
export default function Description() {
  let [isSignedIn, setIsSignedIn] = useState(false);
  let [fullName, setFullName] = useState("");

  useEffect(() => {
    setInterval(() => {
      if (!isSignedIn) {
        services.authentication.isLoggedIn(setIsSignedIn);
      }
    }, 500);
  }, [isSignedIn]);

  useEffect(() => {
    if (isSignedIn) {
      services.authentication.getFullName(setFullName);
    }
  }, [isSignedIn]);

  return (
    <div
      className={styles.Description}
      style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
    >
      <div className={`${styles.Description__Tagline}  ${figtree.className}`}>
        Find Your Vibe.
        <br></br>
        Shop Your Style.
      </div>
      <div
        className={`${styles.Description__TaglineMobile}  ${figtree.className}`}
      >
        Find Your Vibe. Shop Your Style.
      </div>
      <DynamicSignInWrapper
        isSignedIn={isSignedIn}
        fullName={fullName}
      ></DynamicSignInWrapper>
    </div>
  );
}
