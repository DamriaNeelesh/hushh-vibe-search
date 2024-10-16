import Resources from "../../resources/resources";
import Header from "./Header/Header";
import OurMission from "./OurMission/OurMission";
import ValueProp from "./ValueProp/ValueProp";
import styles from "./AboutUs.module.css";
import YourTrust from "./YourTrust/YourTrust";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { Text } from "@chakra-ui/react";
export default function AboutUs() {
  return (
    <div>
      <Header></Header>
      <OurMission></OurMission>
      <ValueProp
        image={Resources.images.WomanLooking.src}
        imageDirection={"left"}
      >
        <div>
          <div className={`${styles.AboutUs__Desc}`}>
            The digital world is constantly evolving, and so should the way we
            search and shop online.
          </div>
        </div>
      </ValueProp>
      <ValueProp image={Resources.images.AISearch.src} imageDirection={"right"}>
        <div>
          <div className={`${styles.AboutUs__Desc}`}>
            Vibe Search is an AI-powered shopping search engine that uses
            advanced semantic search technology to understand natural language
            queries, delivering personalised experiences.
          </div>
        </div>
      </ValueProp>
      <ValueProp
        image={Resources.images.PersonalizedShopping.src}
        imageDirection={"left"}
      >
        <div>
          <div className={`${styles.AboutUs__Title}`}>
            Personalized Shopping<br></br> with Privacy
          </div>
          <div className={`${styles.AboutUs__DescSmall}`}>
            Our platform ensures privacy protection and secure data handling,
            using your information only with your explicit permission to enhance
            your shopping experience, connecting you with the most relevant
            products from global fashion brands online.
          </div>
        </div>
      </ValueProp>
      <ValueProp
        image={Resources.images.VirtualFitting.src}
        imageDirection={"right"}
      >
        <div>
          <div className={`${styles.AboutUs__Title}`}>
            Features That Surpass <br></br>Traditional Search
          </div>
          <div className={`${styles.AboutUs__DescSmall}`}>
            With privacy-focused image search capabilities, you can find similar
            products online even without exact keyword matches. Access our vast
            catalog of global fashion brands and discover items that truly
            resonate with your style and intent.
          </div>
        </div>
      </ValueProp>
      <YourTrust></YourTrust>
      <div className={`${styles.AboutUs__UpperFooter} figtree`}>
        <div className={`${styles.AboutUs__UpperFooterText}`}>
          Powered by <strong>hushh</strong>
        </div>
      </div>
    </div>
  );
}
