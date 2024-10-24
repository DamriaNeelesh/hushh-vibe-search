export default function getHistory(setHistoryArray) {
  let historyArray = localStorage.getItem("vibe-history");

  setHistoryArray(historyArray ? JSON.parse(historyArray) : []);
  return historyArray ? JSON.parse(historyArray) : [];
}
