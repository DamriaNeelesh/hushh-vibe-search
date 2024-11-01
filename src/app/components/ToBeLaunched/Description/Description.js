import styles from "./Description.module.css";
import services from "../../../services/services";
import { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";

export default function Description() {
  const GoogleSignIn = useMemo(
    () => dynamic(() => import("./GoogleSignIn/GoogleSignIn"), { ssr: false }),
    []
  );
  const PostSignInSearchBox = useMemo(
    () =>
      dynamic(() => import("./PostSignInSearchBox/PostSignInSearchBox"), {
        ssr: false,
      }),
    []
  );
  let [isSignedIn, setIsSignedIn] = useState(false);
  let [fullName, setFullName] = useState("");

  useEffect(() => {
    setInterval(() => {
      isSignedIn ? "" : services.authentication.isLoggedIn(setIsSignedIn);
    }, 500);
  }, []);
  useEffect(() => {
    services.authentication.getFullName(setFullName);
  }, []);
  return (
    <div
      className={styles.Description}
      style={{ gap: "1rem", display: "flex", flexDirection: "column" }}
    >
      <div className={`${styles.Description__Tagline} figtree`}>
        Find Your Vibe.
        <br></br>
        Shop Your Style.
      </div>

      {!isSignedIn ? (
        <GoogleSignIn></GoogleSignIn>
      ) : (
        <PostSignInSearchBox fullName={fullName}></PostSignInSearchBox>
      )}
    </div>
  );
}
