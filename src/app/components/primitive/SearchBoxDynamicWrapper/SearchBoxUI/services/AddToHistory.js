export default function AddToHistory(searchQuery) {
  if (localStorage && searchQuery !== "") {
    const searchHistory = localStorage.getItem("vibesearch-history") || "";
    localStorage.setItem(
      "vibesearch-history",
      searchHistory + "," + searchQuery
    );
  }
}
