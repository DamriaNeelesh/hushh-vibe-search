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
  setBrands,
  gender_filter,
  gender,
  price_filter,
  price_range
) {
  if (mainQuery == "" && secondaryQuery == "") return;
  if (!access_token)
    window.location.href = config.redirect_url + "/components/ErrorNoLogin";
  let data = {
    query: mainQuery,
    current_page: currentPage,
    result_count: result_count,
    brand_filter: selectedBrands && selectedBrands.length != 0 ? 1 : 0,
    brand_list:
      selectedBrands && selectedBrands.length != 0 ? selectedBrands : [],
    gender_filter: gender_filter,
    gender: gender,
    price_filter: price_filter,
    price_range: price_range,
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
    let products = {};
    console.log(results)
    if (results["data"]["message"] && currentPage == '1') {
      window.location.href = config.redirect_url + "/components/ErrorPage400";
    }
    if (results["data"]["message"]) {
      setNoMoreResults(true);
      return;
    }
    for (let key in results["data"]) {
      if (results["data"].hasOwnProperty(key) && key != "brands") {
        products[currentPage + " " + key] = results["data"][key];
      }
    }

    if (currentPage == 1) {
      setState({ ...products });
    } else {
      setState({ ...searchResults, ...products });
    }

    results.data.brands ? setBrands(results.data.brands) : ""; // Update brands state
  } catch (e) {
    if (e.response && e.response.status === 500) {
      window.location.href = config.redirect_url + "/components/ErrorPage500";
    } else if (e.response && e.response.status === 400) {
      window.location.href = config.redirect_url + "/components/ErrorPage400";
    } else if (e.response && e.response.status === 401) {
      window.location.href = config.redirect_url + "/components/ErrorNoLogin";
    } else {
    }
  }
}
