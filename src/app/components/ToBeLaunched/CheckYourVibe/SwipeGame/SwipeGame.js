"use client"
import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import resources from "./resources/resources";
import styles from './SwipeGame.module.css'
import { useMediaQuery } from "@chakra-ui/react";
const SwipeGame = () => {
  
  const cardData = [
    {
      id: 1,
      url: resources.Athleisure.src,
    },
    {
      id: 2,
      url: resources.Boho.src,
    },
    {
      id: 3,
      url: resources.Minimal.src,
    },
    {
      id: 4,
      url: resources.Streetwear.src,
    },
    {
      id: 5,
      url: resources.Vintage.src,
    },
  ];
  const [cards, setCards] = useState(cardData);

  return (
    <div
      className="grid place-items-center"
    >
      {cards.map((card) => {
        return (
          <Card key={card.id} cards={cards} setCards={setCards} {...card} />
        );
      })}
    </div>
  );
};

const Card = ({ id, url, setCards, cards }) => {
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  const x = useMotionValue(0);

  const rotateRaw = useTransform(x, [-150, 150], [-18, 18]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = id === cards[cards.length - 1].id;

  const rotate = useTransform(() => {
    const offset = isFront ? 0 : id % 2 ? 6 : -6;

    return `${rotateRaw.get() + offset}deg`;
  });

  const handleDragEnd = () => {
    if (Math.abs(x.get()) > 100) {
      setCards((pv) => pv.filter((v) => v.id !== id));
    }
  };

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
        transition: isMobile? "0.4s transform" :"0.125s transform",
      }}
      animate={{
        scale: isFront ? 1 : 0.98,
      }}
      drag={isFront ? "x" : false}
      dragConstraints={{
        left: isMobile? -50: 0,
        right: isMobile? 300 :0,
      }}
      onDragEnd={handleDragEnd}
    />
  );
};

export default SwipeGame;

