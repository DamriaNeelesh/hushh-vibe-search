"use client";
import TinderCard from "react-tinder-card";

import styles from "./SwipeGame.module.css";
import { useState } from "react";
import SwipeCard from "./SwipeCard/SwipeCard";
export default function SwipeGame() {
  let [index, setIndex] = useState(0);

  return (
    <div className={`${styles.SwipeGame}`}>
      
        <div className={`${styles.SwipeGame__Card}`}>
          <SwipeCard></SwipeCard>
        </div>
      
    </div>
  );
}
