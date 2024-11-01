"use client"
import styles from "./ValueProp.module.css";
import dynamic from "next/dynamic";
let Illustration = dynamic(() => import("./Illustration/Illustration"));
export default function ValueProp(props) {
  return (
    <div className={`${styles.ValueProp} figtree`}>
      <div className={`${styles.ValueProp__Wrapper}`}>
        {props.imageDirection == "left" ? (
          <Illustration image={props.image}></Illustration>
        ) : (
          <></>
        )}
        <div>
          {props.children}
        </div>
        {props.imageDirection == "right" ? (
          <Illustration image={props.image}></Illustration>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
