import utilities from "../../../utilities/utilities";
import styles from "./PostSignInSearchBox.module.css";
import figtree from "../../../../fonts/Figtree";
import AnimatedSearchBox from "../../../LandingScreenContent/AnimatedSearchbox/AnimatedSearchBox";
export default function PostSignInSearchBox(props) {
  return (
    <>
      <div className={`${styles.Description__SearchBox}`}>
        <utilities.SearchBox boxWidth={36}></utilities.SearchBox>
        <br></br>
        <div className={`${styles.Description__ImageAndFashionFlex}`}>
          <utilities.ImageSearchButton></utilities.ImageSearchButton>
          <utilities.FashionDiceRoll></utilities.FashionDiceRoll>
        </div>
      </div>
      <div className={`${styles.Description__SearchBoxMobile}`}>
        <AnimatedSearchBox boxWidth={87} inputWidth={68}></AnimatedSearchBox>
        <div className={`${styles.Description__ImageAndFashionFlexMobile}`}>
          <utilities.ImageSearchButton></utilities.ImageSearchButton>
          <utilities.FashionDiceRoll></utilities.FashionDiceRoll>
        </div>
      </div>
      <div className={styles.Description__SignIn}>
        <div
          className={`${styles.Description__EarlyAccessNotifier}  ${figtree.className}`}
        >
          <div>
            Welcome back <strong>{props.fullName}</strong>
          </div>
        </div>
      </div>
    </>
  );
}
