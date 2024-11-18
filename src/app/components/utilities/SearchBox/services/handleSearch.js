import config from "../../../../resources/config/config";
const handleSearch = (event, searchQuery, isLoggedIn) => {
  if (event.key === "Enter") {
    if (searchQuery !== "") {
      isLoggedIn
        ? (window.location.href = `${config.redirect_url}/components/SearchResults?query=${searchQuery}`)
        : alert("Please login to search");
    } else {
      alert("Please enter a search query");
    }
  }
};
export default handleSearch;
