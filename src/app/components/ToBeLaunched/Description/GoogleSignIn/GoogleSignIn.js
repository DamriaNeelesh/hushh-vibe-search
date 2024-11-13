import styles from "./GoogleSignIn.module.scss";
import gSignInButton from "../resources/gsignin-button.svg";
import services from "../../../../services/services";
import Image from "next/image";
import figtree from "../../../../fonts/Figtree";
export default function GoogleSignIn() {
  const handleGoogleSignIn = async () => {
    try {
      await services.authentication.googleSignIn();
    } catch (error) {}
  };
  return (
    <div className={styles.Description__SignIn}>
      <div className={styles.Description__GoogleSignIn}>
        <Image
          src={gSignInButton.src}
          onClick={handleGoogleSignIn}
          alt="Vibe Search Google Sign In"
          width={"281"}
          height={"51"}
        />
      </div>
      <div className={`${styles.Description__EarlyAccessNotifier}  ${figtree.className}`}>
        <div>
          Get <strong>early access</strong> and{" "}
          <strong>exclusive updates</strong>
        </div>
      </div>
    </div>
  );
}
