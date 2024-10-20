import config from "../../../resources/config/config";
export default function fashionDiceRoll() {
  let queries = [
    "sleek black leather jacket with silver zippers",
    "lightweight floral summer dress with ruffle sleeves",
    "chunky white sneakers with platform soles",
    "high-waisted ripped jeans in faded blue",
    "oversized hoodie in pastel pink",
    "vintage-inspired round sunglasses with gold frames",
    "formal navy blazer with slim fit",
    "ankle-length boots with lace-up details",
    "bohemian-style maxi dress with paisley patterns",
    "basic white t-shirt with crew neck",
    "quilted crossbody bag with gold chain strap",
    "athletic leggings with mesh panels",
    "faux fur coat in soft beige",
    "men's black polo shirt with embroidered logo",
    "silk evening gown in emerald green",
    "light wash denim jacket with distressed look",
    "cropped top with puffed sleeves",
    "knee-high suede boots in dark brown",
    "minimalist wristwatch with leather strap",
    "button-up shirt with tropical prints",
  ];
  // choose a random query
  let index = Math.floor(Math.random() * queries.length);
  window.location.href =
    config.redirect_url + "/components/SearchResults?query=" + queries[index];
}
