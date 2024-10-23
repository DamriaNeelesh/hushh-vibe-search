import resources from "../../../resources/resources";
import styles from "./OurMission.module.css";
export default function OurMission() {
  return (
    <div className={`${styles.OurMission} figtree`}>
      <div className={`${styles.OurMission__SearchBox} figtree`}>
        <img
          src={resources.images.VibeSearchGif.src}
          className={`${styles.OurMission__SearchGif}`}
          alt="Vibe Search Animation"
        ></img>
      </div>
      <div className={`${styles.OurMission__Description}`}>
        <div className={`${styles.OurMission__BigDesc}`}>
          <h1>
          Our mission is to invent technology that understands you. Powered by
          your consensual data, we deliver extremely personalised and secure
          experiences.
          </h1>
        </div>
        <div className={`${styles.OurMission__SmallDesc}`}>We start with Vibe Search</div>
        <img src={resources.images.DownArrow.src} className={`${styles.OurMission__ScrollDown}`} alt="Vibe Scroll"></img>
      </div>
    </div>
  );
}
