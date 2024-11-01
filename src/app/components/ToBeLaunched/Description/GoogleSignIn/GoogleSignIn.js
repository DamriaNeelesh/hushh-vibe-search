import styles from "./GoogleSignIn.module.css";
import gSignInButton from "../resources/gsignin-button.svg";
import services from "../../../../services/services";
export default function GoogleSignIn() {
  const handleGoogleSignIn = async () => {
    try {
      await services.authentication.googleSignIn();
    } catch (error) {}
  };
  return (
    <div className={styles.Description__SignIn}>
      <img
        className={styles.Description__GoogleSignIn}
        src={gSignInButton.src}
        onClick={handleGoogleSignIn}
        alt="Vibe Search Google SIgn In"
      ></img>
      <div className={`${styles.Description__EarlyAccessNotifier} figtree`}>
        <div>
          Get <strong>early access</strong> and{" "}
          <strong>exclusive updates</strong>
        </div>
      </div>
    </div>
  );
}
