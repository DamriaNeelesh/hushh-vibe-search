import config from "../../../../resources/config/config";
import Resources from "../../../../resources/resources";

export default function fashionDiceRoll() {
  if (typeof window === 'undefined') return;
  
  // choose a random query
  let index = Math.floor(Math.random() * Resources.config.queries.length);
  localStorage.removeItem("image-file");
  window.location.href = `/components/SearchResults?query=${Resources.config.queries[index]}`;
}
