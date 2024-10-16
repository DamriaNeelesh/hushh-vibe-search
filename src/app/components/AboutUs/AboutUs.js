import Resources from "../../resources/resources";
import Header from "./Header/Header";
import OurMission from "./OurMission/OurMission";
import ValueProp from "./ValueProp/ValueProp";
import styles from "./AboutUs.module.css";
import YourTrust from "./YourTrust/YourTrust";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { Text } from "@chakra-ui/react";
import config from "../../resources/config/config";
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
            Vibe Search is an <strong>AI-powered shopping search engine</strong>{" "}
            that uses advanced <strong>semantic search</strong> technology to
            understand <strong>natural language queries,</strong> delivering
            personalised experiences.
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
            Our platform ensures <strong>privacy protection</strong> and secure
            data handling, using your information only with your explicit
            permission to enhance your shopping experience, connecting you with
            the most relevant products from{" "}
            <strong>global fashion brands online.</strong>
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
            With <strong>privacy-focused image search capabilities,</strong> you
            can find similar products online even{" "}
            <strong>without exact keyword matches.</strong> Access our vast
            catalog of global fashion brands and discover items that truly
            <strong>resonate with your style and intent.</strong>
          </div>
        </div>
      </ValueProp>
      <YourTrust></YourTrust>
      <div className={`${styles.AboutUs__UpperFooter} figtree`}>
        <div className={`${styles.AboutUs__UpperFooterText}`}>
          Powered by{" "}
          <strong>
            <Link href={"https://hushh.ai"} target="_blank">
              hushh
            </Link>
          </strong>
        </div>
      </div>
      <div className={`${styles.AboutUs__UpperFooter} figtree`}>
        <Link
          className={`${styles.AboutUs__UpperFooterText}`}
          href={config.redirect_url + "/components/AboutUs"}
        >
          About
        </Link>
        <Link
          className={`${styles.AboutUs__UpperFooterText}`}
          href={"https://www.hush1one.com/contact-us"}
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
