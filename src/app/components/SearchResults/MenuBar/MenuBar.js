import utilities from "../../utilities/utilities";
import styles from "./MenuBar.module.scss";
import QueryImage from "../QueryImage/QueryImage";
import { useEffect, useState } from "react";
import services from "../../../services/services";
export default function MenuBar() {
  let [isImageSearch, setIsImageSearch] = useState(false);
  useEffect(() => {
    (async () => {
      setIsImageSearch(await services.vibesearch.isImageSearch(null));
    })();
  }, []);
  let [queryImage, setQueryImage] = useState("");
  useEffect(() => {
    (async () => {
      isImageSearch
        ? setQueryImage(await services.vibesearch.getQueryImage())
        : "";
    })();
  }, [isImageSearch]);
  return (
    <div className={styles.MenuBar}>
      <utilities.AnimatedSearchBox boxWidth={35}></utilities.AnimatedSearchBox>
      <div className={styles.MenuBar__PostImageSearch}>
        {!isImageSearch ? (
          <utilities.ImageSearchButton width={33}></utilities.ImageSearchButton>
        ) : (
          <>
            <QueryImage
              queryImage={queryImage}
              setIsImageSearch={setIsImageSearch}
            ></QueryImage>
            <utilities.ImageSearchButton
              width={20}
              title={"Change Image"}
            ></utilities.ImageSearchButton>
          </>
        )}
        <utilities.FashionDiceRoll></utilities.FashionDiceRoll>
      </div>
    </div>
  );
}
