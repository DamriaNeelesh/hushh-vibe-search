import resources from "../../resources/resources";
import axios from "axios";

export default async function getWishList(access_token, setState) {
  let header = {
    headers: {
      apitoken: access_token,
    },
  };

  try {
    let results = await axios.get(
      resources.config["vibesearchAPIEndpoint"] + "/get-wishlist",
      header
    );

    setState(results["data"]["data"]);
  } catch (e) {}
}
