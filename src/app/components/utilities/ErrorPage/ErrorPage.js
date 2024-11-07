import figtree from "../../../fonts/Figtree";
import utilities from "../utilities";
import styles from "./ErrorPage.module.css";
import Image from "next/image";
export default function ErrorPage(props) {
  return (
    <div>
      <utilities.Header />
      <div className={`${styles.ErrorPage} ${figtree.className}`}>
        <div className={`${styles.ErrorPage__Wrapper} ${figtree.className}`}>
          <div className={`${styles.ErrorPage__Title}`}>{props.title}</div>
          <div className={`${styles.ErrorPage__SubTitle}`}>
            {props.subTitle}
          </div>
          <div className={`${styles.ErrorPage__Image}`}>
            <Image
              src={props.image}
              alt={props.title}
              width={"604"}
              height={"604"}
            />
          </div>
          <div className={`${styles.ErrorPage__Code}`}>{props.code}</div>
        </div>
      </div>
    </div>
  );
}
