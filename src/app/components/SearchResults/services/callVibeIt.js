import services from "../../../services/services";
export default async function callVibeIt(
  loadingBarRef,
  searchParams,
  currentPage,
  setSearchResults,
  setIsLoading,
  searchResults,
  selectedBrands,
  noMoreResults,
  setBrands,
  price_filter,
  price_range,
  gender_filter,
  gender
) {
  loadingBarRef.current.continuousStart(); // Start the loading bar
  let search = searchParams.get("query");
  let imageSearch = searchParams.get("imageSearch");
  let image = localStorage.getItem("image-file");
  services.history.saveToHistory(search);
  let access_token = await services.authentication.getAccessToken();
  services.vibesearch.vibeIt(
    imageSearch ? image : search || "",
    "",
    currentPage,
    20,
    (results) => {
      setSearchResults(results);

      loadingBarRef.current.complete(); // Complete the loading bar
      setIsLoading(false); // Set loading to false when data is fetched
    },
    access_token,
    searchResults,
    selectedBrands,
    noMoreResults,
    setBrands,
    gender_filter,
    gender,
    true,
    price_range
  );
}
