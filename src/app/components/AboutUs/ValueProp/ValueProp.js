import styles from "./ValueProp.module.css";
export default function ValueProp(props) {
  return (
    <div className={`${styles.ValueProp} figtree`}>
      <div className={`${styles.ValueProp__Wrapper}`}>
        {props.imageDirection == "left" ? (
          <img className={`${styles.ValueProp__Image}`} src={props.image} alt="Hushh Vibe Search"></img>
        ) : (
          <></>
        )}
        <div>
          {/* <div className={`${styles.ValueProp__Title}`}>{props.title}</div>
        <div className={`${styles.ValueProp__Desc} ${props.title!=''?styles.ValueProp__DescSmall:''}`}>{props.desc}</div> */}
          {props.children}
        </div>
        {props.imageDirection == "right" ? (
          <img src={props.image} className={`${styles.ValueProp__Image}`} alt="Hushh Vibe Search"></img>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
