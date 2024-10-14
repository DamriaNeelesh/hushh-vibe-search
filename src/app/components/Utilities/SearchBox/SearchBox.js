import styles from "./SearchBox.module.css";
import resources from "./resources/resources";
export default function SearchBox() {
  return (
    <div className={`${styles.SearchBox}`}>
      <img src={resources.magnifyingGlass.src}></img>
      <input className={`${styles.SearchBox__Input}`}></input>
      <img src={resources.cross.src}></img>
      <img src={resources.camera.src}></img>
    </div>
  );
}
