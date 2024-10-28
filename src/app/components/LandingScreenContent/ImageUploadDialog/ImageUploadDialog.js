import styles from "./ImageUploadDialog.module.css";
import { Text } from "@chakra-ui/react";
import ImageUpload from "../../Upload/uploadComponent";
export default function ImageUploadDialog() {
  return (
    <div className={`${styles.ImageUploadDialog__ImageUploadText} figtree`}>
      <div className={`${styles.ImageUploadDialog__ImageUploadTitle}`}>
        See It, Find It
      </div>
      <Text
        letterSpacing={"-0.25px"}
        color={"#606060"}
        lineHeight={{ md: "27px", base: "25px" }}
        fontWeight={"400"}
        fontSize={{ md: "1.25rem", base: "0.75rem" }}
      >
        Upload an image - Love that jacket on Instagram? <br></br> Vibe Search
        will find it (or something even better).
      </Text>
      <div className={`${styles.ImageUploadDialog__ImageUploadDialog}`}>
        <ImageUpload />
      </div>
      <div className={`${styles.ImageUploadDialog__Tagline}`}>
        <Text
          fontWeight="400"
          fontSize={{ md: "1rem", base: "0.5rem" }}
          lineHeight={"19.2px"}
          color={"#596168CF"}
        >
          click the vibes on the left to check them out →
        </Text>
      </div>
    </div>
  );
}
