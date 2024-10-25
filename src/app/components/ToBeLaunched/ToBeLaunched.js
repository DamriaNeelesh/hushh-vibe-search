import Header from "./Header/Header";
import Description from "./Description/Description";
import CompaniesMarquee from "./CompaniesMarquee/CompaniesMarquee";
import utilities from "../utilities/utilities";
import styles from "./ToBeLaunched.module.css";
import WelcomeAboardModal from "./WelcomeAboardModal/WelcomeAboardModal";
import Home2 from "../Home2/home2";
import Resources from "../../resources/resources";
import CheckYourVibe from "./CheckYourVibe/CheckYourVibe";

export const metadata = {
  title: "Vibe Search - match your perfect outfit with us",
  description:
    "Find perfect items to express your individuality in just one click with our vibe search",
  keywords:
    "AI shopping, semantic search, personalized shopping, privacy protection, global fashion brands",
  openGraph: {
    title: "Home - Vibe Search",
    description:
      "Explore Vibe Search, a platform that revolutionizes online shopping with AI and privacy-focused features.",
    images: [Resources.images.VibeLogo.src],
    url: "https://www.vibesearch.ai",
  },
  twitter: {
    card: "summary_large_image",
  },
};

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
