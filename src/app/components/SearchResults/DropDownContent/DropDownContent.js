import { useState } from "react";
import styles from "./DropDownContent.module.css";
import Image from "next/image";
export default function DropDownContent(props) {
  let [showFilter, setShowFilter] = useState(false);

  return (
    <div className={`${styles.DropDownContent}`}>
      <Image
        src={props.icon}
        height={props.height}
        onClick={() => {
          setShowFilter(!showFilter);
        }}
        alt="Hushh Vibe Search filter"
      />
      {showFilter ? props.children : <></>}
    </div>
  );
}
