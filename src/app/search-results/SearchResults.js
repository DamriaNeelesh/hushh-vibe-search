"use client";
import Utilities from '../Utilities/Utilities';
import styles from './SearchResults.module.css';
import Components from '@/app/Components';
import { useEffect, useState } from 'react';
import services from '@/app/services/services';
import { useSearchParams } from 'next/navigation';

export const metadata = {
  title: 'VIBE search',
};

export default function SearchResults() {
  const [searchResults, setSearchResults] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [userDetails, setUserDetails] = useState({});
  const [accessData, setAccessData] = useState(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [productDetails, setProductDetails] = useState(false);
  const [dataFetched, setDatafetched] = useState(false);
  const [elementsInWishList, setElementsInWishList] = useState(new Set());
  const [showNextPage, setShowNextPage] = useState(false);
  const [secondQuery, setSecondQuery] = useState("");

  const searchParams = useSearchParams();
  const query = searchParams.get('query');

  console.log(query);

  useEffect(() => {
    services.getAccessToken(setAccessData);
    if (localStorage) setSecondQuery(localStorage.getItem('image-file'));
    services.getUserDetails(setUserDetails);
  }, [searchParams, query]);

  useEffect(() => {
    if (accessData && accessData.data && accessData.data.session) {
      if (query === 'wishlist') {
        services.getWishlist(accessData.data.session.access_token, setSearchResults).then(() => {
          setDatafetched(true);
        });
      } else {
        setDatafetched(false);
        let input1 = "";
        let input2 = "";
        if (query === "emptyEntry") {
          if (secondQuery) {
            input1 = secondQuery;
          }
        } else {
          input1 = query;
          input2 = secondQuery ? secondQuery : "";
        }
        services.vibeIt(input1, input2, `${currentPage}`, "10", setSearchResults, accessData.data.session.access_token, searchResults).then(() => {
          if (!secondQuery && localStorage) {
            localStorage.removeItem('image-file');
          }
          setDatafetched(true);
        });
      }
    }
  }, [query, currentPage, accessData, secondQuery]);

  useEffect(() => {
    const keys = Object.keys(searchResults);
    const set = new Set([...elementsInWishList]);
    keys.forEach((key) => {
      const product = searchResults[key];
      if (product && product.wishlist_flag === 1 && key) {
        set.add(key);
      }
      if (query === 'wishlist' && key) {
        set.add(key);
      }
    });
    setElementsInWishList(set);
  }, [dataFetched]);

  function addThisIndex(index) {
    const set = new Set([...elementsInWishList]);
    if (index) set.add(index);
    setElementsInWishList(set);
  }

  function removeThisIndex(index) {
    const set = new Set([...elementsInWishList]);
    if (index) set.delete(index);
    setElementsInWishList(set);
  }

  function wishlistLoading() {
    const wishListQuotes = [
      "Start building your dream closet! Use VIBE Search to discover amazing products and add them to your wishlist.",
      "Wishlist is empty? Time to unleash your inner style hunter! Search for your perfect vibe and save your favorites.",
      "Ready to curate your dream wardrobe? Start searching for products and save them here for easy reference.",
      "Keep track of your desires! Add products to your wishlist for future purchases or sharing with friends.",
    ];
    return (
      <div className={`${styles.SearchResults__loading}`} suppressHydrationWarning>
        {wishListQuotes[Math.floor(Math.random() * wishListQuotes.length)]}
      </div>
    );
  }

  function loading() {
    const items = [
      "Unleashing your vibe! We're searching millions of products to find your perfect match.",
      "Think it, find it! Describe your style or upload a pic, and let VIBE do the magic.",
      "Designer dreams or high-street finds? VIBE curates from your favorite brands.",
      "Get ready to be amazed! We're hunting down the perfect pieces just for you.",
      "Hold onto your hats! Your ultimate style discovery is just moments away.",
      "Shhh... we're working our fashion magic! Get ready to refresh your wardrobe.",
    ];

    return (
      <div className={`${styles.SearchResults__loading}`} suppressHydrationWarning>
        {items[Math.floor(Math.random() * items.length)]}
      </div>
    );
  }

  console.log("dataFetched: " + dataFetched);
  console.log(searchResults);

  return (
    <div className={`${styles.SearchResults__ParentContainer}`}>
      {Utilities.LeftMenu(openMenu, query, setOpenMenu)}
      <div
        className={`${styles.SearchResults__container}`}
        style={{
          zIndex: openMenu ? -1 : 0,
          opacity: openMenu ? 0.7 : 1,
        }}
      >
        <div
          className={`${styles.SearchResults}`}
          onClick={() => {
            if (openMenu) setOpenMenu(false);
          }}
        >
          {Utilities.HomeScreenHeader(setOpenMenu, userDetails, setShowDetails)}
          <div className={`${styles.SearchResults__searchBox}`}>
            {Utilities.SearchBox(
              typeof query === 'string' && query !== "emptyEntry" ? query : "What are you looking for?",
              openMenu,
              query
            )}
          </div>
          <div
            className={`${styles.SearchResults__wrapper}`}
            onScroll={(event) => {
              const obj = event.target;
              if (obj.scrollTop === obj.scrollHeight - obj.offsetHeight) {
                setShowNextPage(true);
              }
            }}
          >
            {dataFetched && accessData && accessData.data && accessData.data.session && !searchResults.message
              ? Utilities.SearchResultsElements(
                  searchResults,
                  setShowDetails,
                  setProductDetails,
                  accessData.data.session.access_token,
                  addThisIndex,
                  elementsInWishList,
                  query,
                  removeThisIndex
                )
              : dataFetched && searchResults.message
              ? <div className={`${styles.SearchResults__loading}`}>No more relevant products</div>
              : loading()}
            {dataFetched && searchResults.length === 0 && (
              <div className={`${styles.SearchResults__loading}`}>{wishlistLoading()}</div>
            )}
            <div className={`montserrat ${styles.nextButtons}`}>
              <div
                style={{
                  display: showNextPage && dataFetched && currentPage > 1 ? "inherit" : "none",
                  marginRight: "12px",
                }}
                className={`montserrat ${styles.nextButton}`}
                onClick={() => {
                  setShowNextPage(false);
                  setCurrentPage(currentPage - 1);
                }}
              >
                Prev Page
              </div>
              <div
                style={{
                  display: showNextPage && dataFetched ? "inherit" : "none",
                }}
                className={`montserrat ${styles.nextButton}`}
                onClick={() => {
                  setShowNextPage(false);
                  setCurrentPage(currentPage + 1);
                }}
              >
                Next Page
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {accessData && accessData.data && accessData.data.session
          ? Components.ProductPage(
              query ? query : "",
              productDetails.image,
              productDetails.product_title,
              productDetails.price,
              productDetails.product_url,
              setShowDetails,
              productDetails.id,
              accessData.data.session.access_token,
              showDetails,
              productDetails.description,
              productDetails.brand,
              productDetails.price_availaible,
              productDetails.additional_description,
              productDetails.additional_images
            )
          : ""}
      </div>
    </div>
  );
}
