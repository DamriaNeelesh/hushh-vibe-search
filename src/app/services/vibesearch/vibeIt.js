import config from "../../resources/config/config";
import resources from "../../resources/resources";
import axios from "axios";
import process from "process";
import hasValidImage from "./hasValidImage";
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
  price_range,
  retries
) {
  if (mainQuery == "" && secondaryQuery == "") return;

  if (process.env.NEXT_PUBLIC_SITE_ENV == "staging") {
  } else {
    if (!access_token) {
      window.location.href = config.redirect_url + "/components/ErrorNoLogin";
    }
  }
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

    if (results["data"]["message"] && currentPage == "1") {
      window.location.href = config.redirect_url + "/components/ErrorPage400";
    }
    if (results["data"]["message"]) {
      setNoMoreResults(true);
      return;
    }
    for (let key in results["data"]) {
      let cachedErrors = localStorage.getItem("errorImages");
      if (!cachedErrors) {
        localStorage.setItem("errorImages", JSON.stringify([]));
      }
      let temp =
        localStorage.getItem("errorImages") == "{}"
          ? "[]"
          : localStorage.getItem("errorImages");

      cachedErrors = new Set(JSON.parse(temp));
      if (cachedErrors.has(results["data"][key].image)) {
        continue;
      }
      if (results["data"].hasOwnProperty(key) && key != "brands") {
        if (config.featureFlags.isValidImageCheck) {
          let isValidImg = await hasValidImage(results["data"][key].image);

          if (!isValidImg) {
            cachedErrors.add(results["data"][key].image);
            localStorage.setItem(
              "errorImages",
              JSON.stringify([...cachedErrors])
            );
            continue;
          }
        }
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
    if (process.env.NEXT_PUBLIC_SITE_ENV != "staging") {
      console.log(e);
      if (e.response && e.response.status === 500) {
        if(retries<1){
          vibeIt(mainQuery, secondaryQuery, currentPage, result_count, setState, access_token, searchResults, selectedBrands, setNoMoreResults, setBrands, gender_filter, gender, price_filter, retries+1);
        }else{
          window.location.href = config.redirect_url + "/components/ErrorPage500";
        }
      } else if (e.response && e.response.status === 400) {
        window.location.href = config.redirect_url + "/components/ErrorPage400";
      } else if (e.response && e.response.status === 401) {
        window.location.href = config.redirect_url + "/components/ErrorNoLogin";
      } else {
      }
    }
  }
}
