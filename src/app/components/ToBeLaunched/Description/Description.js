import styles from "./Description.module.css";
import gSignInButton from "./resources/gsign-button.svg";
import services from "../../../services/services";
import { useEffect, useState } from "react";
import utilities from "../../utilities/utilities";

export default function Description() {
  let [isSignedIn, setIsSignedIn] = useState(false);
  let [fullName, setFullName] = useState("");
  const handleGoogleSignIn = async () => {
    try {
      await services.authentication.googleSignIn();
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };
  useEffect(() => {
    setInterval(() => {
      isSignedIn ? "" : services.authentication.isLoggedIn(setIsSignedIn);
    }, 1000);
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
        Find Your Vibe. <br></br>Shop Your Style.
      </div>
      <utilities.SearchBox boxWidth={36}></utilities.SearchBox>
      <div className={styles.Description__SignIn}>
        {!isSignedIn ? (
          <img
            className={styles.Description__GoogleSignIn}
            src={gSignInButton.src}
            onClick={handleGoogleSignIn}
          ></img>
        ) : (
          <></>
        )}
        <div className={`${styles.Description__EarlyAccessNotifier} figtree`}>
          {!isSignedIn ? (
            <div>
              Get <strong>early access</strong> and{" "}
              <strong>exclusive updates</strong>
            </div>
          ) : (
            <div>
              Welcome back <strong>{fullName}</strong>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
