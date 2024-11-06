import styles from "./YourTrust.module.css";
import jigsawPuzzle from "./resources/jigsaw-puzzle.svg";
import Image from "next/image";
export default function YourTrust() {
  return (
    <div className={`${styles.YourTrust} figtree`}>
      <div className={`${styles.YourTrust__Wrapper}`}>
        <div className={`${styles.YourTrust__Image}`}>
          <Image
            width={"223"}
            height={"144"}
            src={jigsawPuzzle.src}
            alt="Hushh Vibe Search Trust"
          />
        </div>
        <div className={`${styles.YourTrust__Title}`}>
          Your Trust, Our Priority
        </div>
        <div className={`${styles.YourTrust__Desc}`}>
          We are committed to user consent and data protection. By using secure
          embeddings, we enhance your experience without compromising privacy.
          Your trust is paramount in our mission to revolutionise online
          shopping.
        </div>
      </div>
    </div>
  );
}
