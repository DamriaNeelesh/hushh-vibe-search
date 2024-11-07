import figtree from "../../../fonts/Figtree";
import styles from "./ImageNotFound.module.css";
import QuestionMark from "./resources/QuestionMark.svg";
import Image from "next/image";
export default function ImageNotFound(props) {
  return (
    <div
      onClick={() => {
        props.onClick();
      }}
      className={`${styles.ImageNotFound} ${figtree.className}`}
    >
      <div className={`${styles.ImageNotFound__Question}`}>
        <Image src={QuestionMark.src} width={"40"} height={"42"} />
      </div>
      <div className={`${styles.ImageNotFound__Text}`}>
        Click to visit
        <div>
          <strong>{props.brand}</strong>
        </div>
        for product photos
      </div>
    </div>
  );
}
