const handleDragEnd = (
  event,
  info,
  index,
  setCards,
  rights,
  setRights,
  setLefts,
  lefts,
  x,
  id
) => {
  const { offset } = info;
  offset.x > 0 ? setRights([...rights, id]) : setLefts([...lefts, id]);
  if (Math.abs(x.get()) > 100) {
    setCards((pv) => pv.filter((v) => v.id !== id));
  }
};

export default handleDragEnd;
