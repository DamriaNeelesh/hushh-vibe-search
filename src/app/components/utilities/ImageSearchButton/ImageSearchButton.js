import styles from "./ImageSearchButton.module.css";
import camera from "./resources/camera.svg";
import FileInputBox from "./FileInputBox/FileInputBox";
export default function ImageSearchButton() {
  return (
    <div
      className={`${styles.SearchBox__ImageSearch} figtree`}
      onClick={() => document.getElementById("searchBox__fileInput").click()}
    >
      <FileInputBox />
      <div className={`${styles.SearchBox__ImageSearchWrapper} figtree`}>
        <img
          src={camera.src}
          className={styles.SearchBox__Icon}
          alt="Camera Icon"
          onClick={() =>
            document.getElementById("searchBox__fileInput").click()
          }
        ></img>
        <div>Image Search</div>
      </div>
    </div>
  );
}
