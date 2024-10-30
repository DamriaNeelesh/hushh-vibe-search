import { useMediaQuery } from "@chakra-ui/react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import styles from "./SwipeCard.module.css";
import React from "react";
import handleDragEnd from "./services/handleDragEnd";
const SwipeCard = ({
  id,
  url,
  setCards,
  cards,
  rights,
  lefts,
  setRights,
  setLefts,
}) => {
  const x = useMotionValue(0);
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  let [windowWidth, setWindowWidth] = useState();
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });
  }, []);
  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);
  const isFront = id === cards[cards.length - 1].id;
  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;
    return `${rotateRaw.get() + offset}deg`;
  });

  return (
    <motion.img
      src={url}
      alt="Placeholder alt"
      className={`${styles.SwipeGame__Card}`}
      style={{
        gridRow: 1,
        gridColumn: 1,
        x,
        opacity,
        rotate,
        transition: isMobile ? "0.05s transform" : "0.125s transform",
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: isMobile ? (-50 / 393) * windowWidth + 10 : 0,
        right: isMobile ? (300 / 393) * windowWidth : 0,
      }}
      dragMomentum={true}
      onDragEnd={(event, info) => {
        handleDragEnd(
          event,
          info,
          id,
          setCards,
          rights,
          setRights,
          setLefts,
          lefts,
          x,
          id
        );
      }}
      dragTransition={{ bounceDamping: 30, bounceStiffness: 1000 }}
      dragElastic={1}
    />
  );
};
export default SwipeCard;
