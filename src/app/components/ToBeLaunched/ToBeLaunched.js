import Header from "./Header/Header";
import Description from "./Description/Description";
import CompaniesMarquee from "./CompaniesMarquee/CompaniesMarquee";
import utilities from "../utilities/utilities";
import styles from "./ToBeLaunched.module.css";
import WelcomeAboardModal from "./WelcomeAboardModal/WelcomeAboardModal";
export default function ToBeLaunched() {
  return (
    <div>
      <Header></Header>
      <WelcomeAboardModal></WelcomeAboardModal>
      <div className={styles.ToBeLaunched__Content}>
        <Description></Description>
        <CompaniesMarquee></CompaniesMarquee>
      </div>
      <div className={styles.ToBeLaunched__Footer}>
        <utilities.Footer></utilities.Footer>
      </div>
    </div>
  );
}
