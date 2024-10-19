import { useEffect, useState } from "react";
import resources from "../resources/resources";
import styles from "./SwipeCard.module.css";
import TinderCard from "react-tinder-card";
import { useMemo } from "react";
import React from "react";
export default function SwipeCard(props) {
  let onSwipe = (direction) => {};
  const childRefs = useMemo(
    () =>
      Array(images.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );
  let [images, setImages] = useState([]);
  useEffect(() => {
    setImages([
      <TinderCard
        ref={childRefs[0]}
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        preventSwipe={["right", "left"]}
        onSwipeRequirementFulfilled={async (event) => {
          // remove this component from the list of images
          await childRefs[0].current.swipe("left");
          setImages(images.slice(1, 2));
        }}
        flickOnSwipe={true}
      >
        <img
          src={resources.Minimal.src}
          className={`${styles.SwipeCard__Image}`}
        ></img>
      </TinderCard>,
      <TinderCard
        ref={childRefs[1]}
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        preventSwipe={["right", "left"]}
        onSwipeRequirementFulfilled={async (event) => {
          await childRefs[1].current.swipe("left");
          setImages(images.slice(2, 3));
        }}
        flickOnSwipe={true}
      >
        <img
          src={resources.Athleisure.src}
          className={`${styles.SwipeCard__Image}`}
        ></img>
      </TinderCard>,
      <TinderCard
        ref={childRefs[2]}
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        preventSwipe={["right", "left"]}
        onSwipeRequirementFulfilled={async (event) => {
          await childRefs[2].current.swipe("left");
          setImages(images.slice(3, 4));
        }}
        flickOnSwipe={true}
      >
        <img
          src={resources.Boho.src}
          className={`${styles.SwipeCard__Image}`}
        ></img>
      </TinderCard>,
      <TinderCard
        ref={childRefs[3]}
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        preventSwipe={["right", "left"]}
        onSwipeRequirementFulfilled={async (event) => {
          await childRefs[3].current.swipe("left");
          setImages(images.slice(4, 5));
        }}
        flickOnSwipe={true}
      >
        <img
          src={resources.Streetwear.src}
          className={`${styles.SwipeCard__Image}`}
        ></img>
      </TinderCard>,
      <TinderCard
        ref={childRefs[4]}
        onSwipe={onSwipe}
        onCardLeftScreen={() => onCardLeftScreen("fooBar")}
        preventSwipe={["right", "left"]}
        onSwipeRequirementFulfilled={async (event) => {
          await childRefs[4].current.swipe("left");
          setImages(images.slice(5, 6));
        }}
        flickOnSwipe={true}
      >
        <img
          src={resources.Vintage.src}
          className={`${styles.SwipeCard__Image}`}
        ></img>
      </TinderCard>,
    ]);
  }, []);

  return <>{images}</>;
}
