"use client";
import { useEffect, useState } from "react";
import services from "../../services/services";
import { useSearchParams } from "next/navigation";
export default function SearchResults() {
  let [searchResults, setSearchResults] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [selectedBrands, setSelectedBrands] = useState([]);
  let [noMoreResults, setNoMoreResults] = useState(false);
  const searchParams = useSearchParams();
  useEffect(() => {
    async function callVibeIt() {
      const search = searchParams.get("query");
      let access_token = await services.authentication.getAccessToken();
      services.vibesearch.vibeIt(
        search? search: '',
        "",
        currentPage,
        20,
        setSearchResults,
        access_token,
        searchResults,
        selectedBrands,
        noMoreResults
      );
    }
    callVibeIt();
  }, []);
  return <div>Search Results are:
    <div>
        {
            JSON.stringify(searchResults)
        }
    </div>

  </div>;
}
