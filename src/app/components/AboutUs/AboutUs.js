import Resources from "../../resources/resources";
import Header from "./Header/Header";
import OurMission from "./OurMission/OurMission";
import ValueProp from "./ValueProp/ValueProp";
import styles from "./AboutUs.module.css";
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
            The digital world is constantly<br></br> evolving, and so should the
            way we<br></br>
            search and shop online.
          </div>
        </div>
      </ValueProp>
      <ValueProp image={Resources.images.AISearch.src} imageDirection={"right"}>
        <div>
          <div className={`${styles.AboutUs__Desc}`}>
            Vibe Search is an AI-powered<br></br> shopping search engine that
            uses<br></br>
            advanced semantic search<br></br> technology to understand natural
            <br></br> language queries, delivering personalised experiences.
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
            Our platform ensures privacy protection and secure data<br></br>{" "}
            handling, using your information only with your explicit<br></br>{" "}
            permission to enhance your shopping experience,<br></br> connecting
            you with the most relevant products from<br></br> global fashion
            brands online.
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
            With privacy-focused image search capabilities, you<br></br> can
            find similar products online even without exact <br></br>keyword
            matches. Access our vast catalog of global<br></br> fashion brands
            and discover items that truly resonate<br></br> with your style and
            intent.
          </div>
        </div>
      </ValueProp>
    </div>
  );
}
