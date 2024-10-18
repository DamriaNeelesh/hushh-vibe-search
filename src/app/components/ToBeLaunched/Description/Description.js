import styles from "./Description.module.css";
import VibeSearchGif from "./VibeSearchGif/VibeSearchGif";
import Calender from "./resources/calender.svg";
import gSignInButton from "./resources/gsign-button.svg";
import services from "../../../services/services";
import { useEffect, useState } from "react";
export default function Description() {
  let [isSignedIn, setIsSignedIn] = useState(false);
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
  return (
    <div className={styles.Description}>
      <div className={`${styles.Description__Tagline} figtree`}>
        Find Your Vibe. <br></br>Shop Your Style.
      </div>
      <VibeSearchGif></VibeSearchGif>
      <div className={styles.Description__LaunchDateWrapper}>
        <img className={styles.Description__Calender} src={Calender.src}></img>
        <div className={`${styles.Description__LaunchDate} figtree`}>
          Launching Oct 20th 2024!
        </div>
      </div>
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
            "Thank you for registering"
          )}
        </div>
      </div>
    </div>
  );
}
