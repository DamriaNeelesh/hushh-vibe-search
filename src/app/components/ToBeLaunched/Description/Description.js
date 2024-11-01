import styles from "./Description.module.css";
import services from "../../../services/services";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

export default function Description() {
  const GoogleSignIn = dynamic(() => import("./GoogleSignIn/GoogleSignIn"), {
    ssr: false,
  });
  const PostSignInSearchBox = dynamic(
    () => import("./PostSignInSearchBox/PostSignInSearchBox"),
    {
      ssr: false,
    }
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
  }, [isSignedIn]);
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
