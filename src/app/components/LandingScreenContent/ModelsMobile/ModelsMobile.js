import styles from "./ModelsMobile.module.css";
import home2Resources from "../resources/home2Resources";
import Image from "next/image";
export default function ModelsMobile() {
  return (
    <div className={`${styles.ModelsMobile}`}>
      <div>
        <Image
          className={`${styles.ModelsMobile__MaleModel}`}
          src={home2Resources.Model1}
          width={"178"}
          height={"238"}
        ></Image>
        <Image
          className={`${styles.ModelsMobile__FemaleModel}`}
          src={home2Resources.Model2}
          width={"178"}
          height={"238"}
        ></Image>
      </div>
    </div>
  );
}
