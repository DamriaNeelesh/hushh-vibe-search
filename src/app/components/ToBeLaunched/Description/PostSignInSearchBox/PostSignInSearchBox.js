import utilities from "../../../utilities/utilities";
import styles from "./PostSignInSearchBox.module.css";
export default function PostSignInSearchBox(props) {
  return (
    <>
      <div className={`${styles.Description__SearchBox}`}>
        <utilities.SearchBox boxWidth={36}></utilities.SearchBox>
      </div>
      <div className={`${styles.Description__SearchBoxMobile}`}>
        <utilities.SearchBox boxWidth={80}></utilities.SearchBox>
      </div>
      <div className={styles.Description__SignIn}>
        <div className={`${styles.Description__EarlyAccessNotifier} figtree`}>
          <div>
            Welcome back <strong>{props.fullName}</strong>
          </div>
        </div>
      </div>
    </>
  );
}
