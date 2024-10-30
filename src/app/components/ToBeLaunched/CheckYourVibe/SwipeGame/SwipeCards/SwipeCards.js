import SwipeCard from "./SwipeCard/SwipeCard";
export default function SwipeCards({
  cards,
  setCards,
  rights,
  lefts,
  setRights,
  setLefts,
}) {
  return (
    <>
      {cards.map((card) => {
        return (
          <SwipeCard
            key={card.id}
            cards={cards}
            setCards={setCards}
            {...card}
            rights={rights}
            lefts={lefts}
            setRights={setRights}
            setLefts={setLefts}
          />
        );
      })}
    </>
  );
}
