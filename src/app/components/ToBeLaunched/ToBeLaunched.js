import Header from "./Header/Header";
import Description from "./Description/Description";
import CompaniesMarquee from "./CompaniesMarquee/CompaniesMarquee";
import utilities from "../utilities/utilities";
import styles from "./ToBeLaunched.module.css";
import WelcomeAboardModal from "./WelcomeAboardModal/WelcomeAboardModal";
import Home2 from "../Home2/home2";
import Resources from "../../resources/resources";
import CheckYourVibe from "./CheckYourVibe/CheckYourVibe";
import toBeLaunchedMetadata from './toBeLaunchedMetadata'

export const metadata=toBeLaunchedMetadata;

export default function ToBeLaunched() {
  return (
    <div>
      <Header></Header>
      <div className={styles.ToBeLaunched__Content} style={{ gap: "2rem" }}>
        <img
          className={styles.ToBeLaunched__VibeLogoMobile}
          alt="Vibe Search Logo"
          src={Resources.images.VibeLogo.src}
        ></img>
        <Description></Description>
        <div className={styles.ToBeLaunched__CompaniesMarquee}>
          <CompaniesMarquee></CompaniesMarquee>
        </div>
        <div className={styles.ToBeLaunched__CompaniesMarqueeMobile}>
          <CompaniesMarquee isMobile={true}></CompaniesMarquee>
        </div>
      </div>
      <CheckYourVibe></CheckYourVibe>
      <Home2></Home2>
      <div className={styles.ToBeLaunched__Footer}>
        <utilities.Footer></utilities.Footer>
      </div>
    </div>
  );
}
