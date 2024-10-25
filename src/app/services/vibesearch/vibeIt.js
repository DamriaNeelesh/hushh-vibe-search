import config from "../../resources/config/config";
import resources from "../../resources/resources";
import axios from "axios";
export default async function vibeIt(
  mainQuery,
  secondaryQuery,
  currentPage,
  result_count,
  setState,
  access_token,
  searchResults,
  selectedBrands,
  setNoMoreResults,
  setBrands
) {
  if (mainQuery == "" && secondaryQuery == "") return;
  let data = {
    query: mainQuery,
    current_page: currentPage,
    result_count: result_count,
    brand_filter: selectedBrands && selectedBrands.length != 0 ? 1 : 0,
    brand_list:
      selectedBrands && selectedBrands.length != 0 ? selectedBrands : [],
  };
  let header = {
    headers: {
      apitoken: access_token ? access_token : config.guestModeAccessToken,
    },
  };
  try {
    let results = await axios.post(
      resources.config["vibesearchAPIEndpoint"] + "/vibe-it",
      data,
      header
    );
    if (results["data"]["message"]) {
      setNoMoreResults(true);
      return;
    }
    let products = {};
    console.log(results["data"]);
    for (let key in results["data"]) {
      if (results["data"].hasOwnProperty(key) && key!="brands") {
        products[currentPage + " " + key] = results["data"][key];
      }
    }
    setState({ ...searchResults, ...products });

    setBrands(results.data.brands); // Update brands state
  } catch (e) {
    
  }
}
