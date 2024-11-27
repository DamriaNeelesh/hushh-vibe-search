import styles from "./QueryImage.module.scss";
import Resources from "../../../resources/resources";
export default function QueryImage({ queryImage, setIsImageSearch }) {
  return (
    <div className={styles.FilterUI__QueryImageWrapper}>
      <div className={styles.FilterUI__QueryImage}>
        <img
          className={styles.FilterUI__ClearImage}
          onClick={() => {
            setIsImageSearch(false);
            localStorage.removeItem("image-file");
          }}
          src={Resources.images.CrossIcon.src}
        ></img>
        <img className={styles.FilterUI__QueryImage} src={queryImage}></img>
      </div>
    </div>
  );
}
