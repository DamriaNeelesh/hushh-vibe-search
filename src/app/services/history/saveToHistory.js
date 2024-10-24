export default async function saveToHistory(searchQuery) {
  let history = JSON.parse(localStorage.getItem("vibe-history"));
  if (!history) {
    history = [];
  }
  history.push(searchQuery);
  localStorage.setItem("vibe-history", JSON.stringify(history));
}
