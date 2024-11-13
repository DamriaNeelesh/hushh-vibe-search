import styles from "./Illustration.module.scss";
import Image from "next/image";
export default function Illustration(props) {
  return (
    <div className={`${styles.ValueProp__Image}`}>
      <Image
        src={props.image}
        alt="Hushh Vibe Search"
        width={"434"}
        height={"458"}
      />
    </div>
  );
}
