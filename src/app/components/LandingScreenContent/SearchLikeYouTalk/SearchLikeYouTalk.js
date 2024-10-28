import AnimatedSearchBox from "../AnimatedSearchbox/AnimatedSearchBox";
import { Text } from "@chakra-ui/react";
import styles from "./SearchLikeYouTalk.module.css";
export default function SearchLikeYouTalk() {
  return (
    <div className={`${styles.SearchLikeYouTalk__Text}`}>
      <div className={styles.SearchLikeYouTalk__Title}>
        <Text
          color={"#273434"}
          fontSize={{ md: "2.5rem", base: "1.25rem" }}
          letterSpacing={"-0.25px"}
          lineHeight={{ md: "44px", base: "32px" }}
          fontWeight="700"
        >
          Search like you talk...
        </Text>
      </div>
      <div className={`${styles.SearchLikeYouTalk__TitleMobile} figtree`}>
        Search like you talk...
      </div>
      <div className={`${styles.SearchLikeYouTalk__Desc} `}>
        Type in anything - "Boho dress for summer" or "Outfit <br></br> inspired
        by that cool movie poster".
      </div>
      <div className={`${styles.SearchLikeYouTalk__SearchBox} `}>
        <AnimatedSearchBox />
      </div>
      <div className={`${styles.SearchLikeYouTalk__SearchBoxMobile} `}>
        <AnimatedSearchBox boxWidth={95}/>
      </div>
      <div className={`${styles.SearchLikeYouTalk__Tagline} `}>
        <Text
          cursor={"pointer"}
          mt={2}
          fontWeight={"400"}
          fontSize={{ md: "1rem", base: "0.5rem" }}
          lineHeight={"19.2px"}
          color="#596168CF"
        >
          ← click the vibes on the left to check them out
        </Text>
      </div>
      <div className={`${styles.SearchLikeYouTalk__TaglineMobile} `}>
        <div>click the vibes on the Below to check them out</div>
      </div>
    </div>
  );
}
