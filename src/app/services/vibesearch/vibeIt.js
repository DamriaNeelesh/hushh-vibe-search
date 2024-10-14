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
  setNoMoreResults
) {
  console.log("inside vibe it");
  if (mainQuery == "" && secondaryQuery == "") return;
  let data = {
    query: {
      mainquery: mainQuery,
      secondaryquery: secondaryQuery,
    },
    current_page: currentPage,
    result_count: result_count,
    brand_filter: selectedBrands && selectedBrands.length != 0 ? 1 : 0,
    brand_list:
      selectedBrands && selectedBrands.length != 0 ? selectedBrands : [],
  };
  let header = {
    headers: {
      apitoken: access_token,
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
    for (let key in results["data"]) {
      if (results["data"].hasOwnProperty(key)) {
        products[currentPage + " " + key] = results["data"][key];
      }
    }
    setState({ ...searchResults, ...products });
    console.log(results["data"]);
  } catch (e) {}
}
