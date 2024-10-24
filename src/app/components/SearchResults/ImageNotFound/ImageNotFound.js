import styles from "./ImageNotFound.module.css";
import QuestionMark from "./resources/QuestionMark.svg";
export default function ImageNotFound(props) {
  return (
    <div onClick={
        ()=>{
            props.onClick()
        }
    } className={`${styles.ImageNotFound} figtree`}>
      <img
        className={`${styles.ImageNotFound__Question}`}
        src={QuestionMark.src}
      ></img>
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
