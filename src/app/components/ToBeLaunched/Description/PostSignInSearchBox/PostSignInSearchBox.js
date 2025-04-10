import utilities from "../../../utilities/utilities";
import styles from "./PostSignInSearchBox.module.scss";
import figtree from "../../../../fonts/Figtree";
import AnimatedSearchBox from "../../../utilities/AnimatedSearchbox/AnimatedSearchBox";
export default function PostSignInSearchBox(props) {
  return (
    <>
      <div className={`${styles.Description__SearchBox}`}>
        <utilities.SearchBox boxWidth={36}></utilities.SearchBox>

        <div className={`${styles.Description__ImageAndFashionFlex}`}>
          <utilities.ImageSearchButton></utilities.ImageSearchButton>
        </div>
      </div>
      <div className={`${styles.Description__SearchBoxMobile}`}>
        <AnimatedSearchBox boxWidth={87} inputWidth={68}></AnimatedSearchBox>
        <div style={{fontWeight:'600',fontSize:'9px',lineHeight:'12.22px', textAlign:'left',display:'flex',alignSelf:'baseline'}}>**you can also add links here to search</div>
        <div className={`${styles.Description__ImageAndFashionFlexMobile}`}>
          <utilities.ImageSearchButton></utilities.ImageSearchButton>
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
