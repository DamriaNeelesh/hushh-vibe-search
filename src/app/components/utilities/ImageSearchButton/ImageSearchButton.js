import styles from "./ImageSearchButton.module.scss";
import camera from "./resources/camera.svg";
import FileInputBox from "./FileInputBox/FileInputBox";
import Image from "next/image";
import figtree from "../../../fonts/Figtree";
export default function ImageSearchButton({ width, title, height }) {
  return (
    <div
      style={{ width: width ? width + "vw" : "inherit" }}
      className={`${styles.SearchBox__ImageSearch} ${figtree.className}`}
      onClick={() => document.getElementById("searchBox__fileInput").click()}
    >
      <FileInputBox />
      <div
        className={`${styles.SearchBox__ImageSearchWrapper} ${figtree.className}`}
      >
        <div className={styles.SearchBox__Icon}>
          <Image
            src={camera.src}
            alt="Camera Icon"
            onClick={() =>
              document.getElementById("searchBox__fileInput").click()
            }
            width={"25"}
            height={"25"}
          />
        </div>
        <div>{title? title: "Image Search"}</div>
      </div>
    </div>
  );
}
