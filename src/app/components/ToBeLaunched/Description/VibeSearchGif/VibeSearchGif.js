import resources from "../../../../resources/resources";
import styles from "./VibeSearchGif.module.css";
export default function VibeSearchGif() {
  return (
    <div className={`${styles.Description__SearchboxGifWrapper}`}>
      <img
        className={styles.Description__SearchboxGif}
        src={resources.images.VibeSearchGif.src}
        alt="Hushh Vibe Search Animation"
      ></img>
    </div>
  );
}
