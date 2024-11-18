import styles from "./Models.module.scss";
import home2Resources from "../resources/home2Resources";
import Image from "next/image";
export default function Models() {
  return (
    <>
      <div className={`${styles.Models__ModelsFlex}`}>
        <div className={`${styles.Models__Models}`}>
          <div className={`${styles.Models__Model1}`}>
            <Image
              src={home2Resources.Model1.src}
              alt="Vibe Search Model 1"
              width={"320"}
              height={"427"}
            />
          </div>
          <div className={`${styles.Models__Model2}`}>
            <Image
              src={home2Resources.Model2.src}
              alt="Vibe Search Model 2"
              width={"250"}
              height={"237"}
            />
          </div>
        </div>
      </div>
    </>
  );
}
