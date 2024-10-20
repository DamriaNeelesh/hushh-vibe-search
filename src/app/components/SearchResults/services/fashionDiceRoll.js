import config from "../../../resources/config/config";
export default function fashionDiceRoll() {
  let queries = ["Boho chic summer dresses", "dark academia outfits"];
  // choose a random query
  let index = Math.floor(Math.random() * queries.length);
  window.location.href =
    config.redirect_url + "/components/SearchResults?query=" + queries[index];
}
