import utilities from "../utilities";
import styles from "./ErrorPage.module.css";
export default function ErrorPage(props) {
  return (
    <div>
    <utilities.Header />
      <div className={`${styles.ErrorPage} figtree`}>
        <div className={`${styles.ErrorPage__Wrapper} figtree`}>
        <div className={`${styles.ErrorPage__Title}`}>{props.title}</div>
        <div className={`${styles.ErrorPage__SubTitle}`}>{props.subTitle}</div>
        <img className={`${styles.ErrorPage__Image}`} src={props.image}></img>
        <div className={`${styles.ErrorPage__Code}`}>{props.code}</div>
        </div>
      </div>
    </div>
  );
}
