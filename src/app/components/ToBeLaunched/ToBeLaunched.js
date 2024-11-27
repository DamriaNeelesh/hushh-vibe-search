import Description from "./Description/Description";
import CompaniesMarquee from "./CompaniesMarquee/CompaniesMarquee";
import utilities from "../utilities/utilities";
import styles from "./ToBeLaunched.module.scss";
import LandingScreenContent from "../LandingScreenContent/LandingScreenContent";
import Resources from "../../resources/resources";
import CheckYourVibe from "./CheckYourVibe/CheckYourVibe";
import toBeLaunchedMetadata from "./toBeLaunchedMetadata";
import DownArrow from "./DownArrow/DownArrow";
import Header from "./Header/Header";
import Image from "next/image";
import config from "../../resources/config/config";
import { Figtree } from "next/font/google";
export const metadata = toBeLaunchedMetadata;

const figtree = Figtree({ subsets: ["latin"] });

export default function ToBeLaunched() {
  console.log(process.env.NEXT_PUBLIC_SITE_ENV);
  return (
    <div className={`${styles.ToBeLaunched} ${figtree.className}`}>
      <Header></Header>
      <div className={styles.ToBeLaunched__Content} style={{ gap: "2rem" }}>
        <div className={styles.ToBeLaunched__VibeLogoMobile}>
          <Image
            alt="Vibe Search Logo"
            src={Resources.images.VibeLogo.src}
            width={"125"}
            height={"51"}
          />
        </div>
        <Description></Description>
        <div className={styles.ToBeLaunched__CompaniesMarquee}>
          <CompaniesMarquee></CompaniesMarquee>
        </div>
        <div className={styles.ToBeLaunched__CompaniesMarqueeMobile}>
          <CompaniesMarquee isMobile={true}></CompaniesMarquee>
        </div>
      </div>
      <DownArrow></DownArrow>
      {config.featureFlags.vibeCheck ? <CheckYourVibe></CheckYourVibe> : <></>}
      <LandingScreenContent></LandingScreenContent>
    </div>
  );
}
