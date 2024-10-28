import styles from "./Models.module.css";
import home2Resources from "../resources/home2Resources";
export default function Models() {
  return (
    <div className={`${styles.Models__ModelsFlex}`}>
      <div className={`${styles.Models__Models}`}>
        <img
          src={home2Resources.Model1.src}
          alt="Vibe Search Model 1"
          className={`${styles.Models__Model1}`}
        />
        <img
          src={home2Resources.Model2.src}
          alt="Vibe Search Model 2"
          className={`${styles.Models__Model2}`}
        />
      </div>
    </div>
  );
}
