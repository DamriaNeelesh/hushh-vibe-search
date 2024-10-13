"use client";
import Utilities from "../Utilities";
import styles from './SearchResultElements.module.css';

export default function SearchResultElements(
  results, 
  setShowDetails, 
  setProductDetails, 
  access_token, 
  addThisIndex, 
  elementsInWishList, 
  query, 
  removeThisIndex
) {
  let response = [];
  let keys = results ? Object.keys(results) : [];
  
  console.log(results['message']);

  if (results['message'] === "No more relevant products") {
    response = [
      <div key="no-products">
        Looks like we have no relevant products, hang on to us soon we will be adding more products.
      </div>
    ];
  } else {
    for (let result of keys) {
      let product = results[result];
      response.push(
        <div
          className={styles.productWrapper}
          onClick={() => setProductDetails(product)}
          key={result}
        >
          {product != null ? Utilities.SearchResultElement(
            product["id"], 
            product["brand"], 
            product["product_title"], 
            product["price"], 
            0, 0, 
            product["image"], 
            product["description"], 
            access_token, 
            setShowDetails, 
            product["price_available"], 
            product["wishlist_flag"], 
            product["additional_images"], 
            addThisIndex, 
            elementsInWishList, 
            result, 
            query, 
            removeThisIndex, 
            product["product_id"]
          ) : <></>}
        </div>
      );
    }
  }

  return <div className={`${styles.searchresultelements}`}>{response}</div>;
}
