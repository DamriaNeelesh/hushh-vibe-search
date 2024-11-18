import Image from "next/image";
import resources from "../../../resources/resources";
import utilities from "../../utilities/utilities";
import styles from "./OurMission.module.scss";
import figtree from "../../../fonts/Figtree";
export default function OurMission() {
  return (
    <div className={`${styles.OurMission} ${figtree.className}`}>
      <div className={`${styles.OurMission__SearchBox}`}>
        <utilities.AnimatedSearchBox boxWidth={"40"} />
      </div>
      <div className={`${styles.OurMission__Description}`}>
        <div className={`${styles.OurMission__BigDesc}`}>
          <h1>
            Our mission is to invent technology that understands you. Powered by
            your consensual data, we deliver extremely personalised and secure
            experiences.
          </h1>
        </div>
        <div className={`${styles.OurMission__SmallDesc}`}>
          We start with Vibe Search
        </div>
        <div className={`${styles.OurMission__ScrollDown}`}>
          <Image
            src={resources.images.DownArrow.src}
            alt="Vibe Scroll"
            width={"29"}
            height={"29"}
          />
        </div>
      </div>
    </div>
  );
}
