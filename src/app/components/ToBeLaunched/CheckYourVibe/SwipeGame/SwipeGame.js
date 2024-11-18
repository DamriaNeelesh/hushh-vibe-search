"use client";
import React from "react";
import SwipeCards from "./SwipeCards/SwipeCards";

const SwipeGame = (props) => {
  return (
    <div className="grid place-items-center">
      <SwipeCards
        cards={props.cards}
        rights={props.rights}
        lefts={props.lefts}
        setLefts={props.setLefts}
        setRights={props.setRights}
        setCards={props.setCards}
        setIsAllSwiped={props.setIsAllSwiped}
      ></SwipeCards>
    </div>
  );
};

export default SwipeGame;
