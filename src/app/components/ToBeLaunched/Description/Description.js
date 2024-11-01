"use client"
import styles from "./Description.module.css";
import services from "../../../services/services";
import { useEffect, useState, useMemo } from "react";
import dynamic from "next/dynamic";

const GoogleSignIn = 
dynamic(() => import("./GoogleSignIn/GoogleSignIn"), { ssr: false });

const PostSignInSearchBox = 
dynamic(() => import("./PostSignInSearchBox/PostSignInSearchBox"), {
  ssr: false,
});

export default function Description() {
  let [isSignedIn, setIsSignedIn] = useState(false);
  let [fullName, setFullName] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isSignedIn) {
        services.authentication.isLoggedIn(setIsSignedIn);
      }
    }, 500);
    return () => clearInterval(intervalId);
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
      <div className={`${styles.Description__Tagline} figtree`}>
        Find Your Vibe.
        <br></br>
        Shop Your Style.
      </div>

      {!isSignedIn ? (
        <GoogleSignIn />
      ) : (
        <PostSignInSearchBox fullName={fullName} />
      )}
    </div>
  );
}
