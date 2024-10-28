import styles from "./ChooseAVibe.module.css";
import home2Resources from "../resources/home2Resources";
import Resources from '../../../resources/resources'
import Image from "next/image";
export default function ChooseAVibe() {
  return (
    <div className={`${styles.ChooseAVibe} `}>
      <Image
        className={`${styles.ChooseAVibe__Vibe} `}
        src={home2Resources.Vintage}
        alt="Vintage Patterns"
        onClick={() => {
          window.location.href =
            Resources.config.redirect_url +
            "/components/SearchResults?query=Vintage Patterns";
        }}
      />
      <Image
        className={`${styles.ChooseAVibe__Vibe}`}
        src={home2Resources.CoffeeLoving}
        alt="Coffee Loving Bookworm"
        onClick={() => {
          window.location.href =
            Resources.config.redirect_url +
            "/components/SearchResults?query=Coffee Loving Bookworms";
        }}
      />
      <Image
        className={`${styles.ChooseAVibe__Vibe} `}
        src={home2Resources.CyberPunk}
        alt="Cyberpunk Neon Outfits"
        onClick={() => {
          window.location.href =
            Resources.config.redirect_url +
            "/components/SearchResults?query=Cyberpunk Neon Outfits";
        }}
      />
    </div>
  );
}
