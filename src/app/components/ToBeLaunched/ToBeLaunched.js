import Header from "./Header/Header";
import Description from "./Description/Description";
import CompaniesMarquee from "./CompaniesMarquee/CompaniesMarquee";
import utilities from "../utilities/utilities";
import styles from "./ToBeLaunched.module.css";
import WelcomeAboardModal from "./WelcomeAboardModal/WelcomeAboardModal";
import Home2 from "../Home2/home2";
export default function ToBeLaunched() {
  return (
    <div>
      <Header></Header>
      <WelcomeAboardModal></WelcomeAboardModal>
      <div className={styles.ToBeLaunched__Content} style={{gap:'2rem'}}>
        <Description></Description>
        <CompaniesMarquee></CompaniesMarquee>
      </div>
      <Home2></Home2>

      {/* <div>
      </div> */}
      <div className={styles.ToBeLaunched__Footer}>
        <utilities.Footer></utilities.Footer>
      </div>
    </div>
  );
}
