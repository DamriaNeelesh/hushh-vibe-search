import resources from "../../resources/resources";
import axios from "axios";

export default async function addToWishList(productId, access_token) {
  let data = {
    product_id: productId,
  };
  let header = {
    headers: {
      apitoken: access_token,
    },
  };
  try {
    let results = await axios.post(
      resources.config["vibesearchAPIEndpoint"] + "/addin-wishlist",
      data,
      header
    );
  } catch (e) {}
}
