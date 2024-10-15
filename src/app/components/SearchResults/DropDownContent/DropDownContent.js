
import { useState } from "react";
import styles from './DropDownContent.module.css'
export default function DropDownContent(props) {
  let [showFilter, setShowFilter] = useState(false);
  
  return (
    <div className={`${styles.DropDownContent}`}>
      <img
        src={props.icon}
        height={props.height}
        onClick={() => {
          setShowFilter(!showFilter);
        }}
      ></img>
      {showFilter ? (
        props.children
      ) : (
        <></>
      )}
    </div>
  );
}
