import config from "../../../../resources/config/config";
import Resources from "../../../../resources/resources";
export default function fashionDiceRoll() {
  // choose a random query
  let index = Math.floor(Math.random() * Resources.config.queries.length);
  window.location.href =
    config.redirect_url +
    "/components/SearchResults?query=" +
    Resources.config.queries[index];
}
