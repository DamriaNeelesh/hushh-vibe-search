"use client"
import Resources from "../../resources/resources";
import Header from "./Header/Header";
import OurMission from "./OurMission/OurMission";
import ValueProp from "./ValueProp/ValueProp";
import styles from "./AboutUs.module.css";
import YourTrust from "./YourTrust/YourTrust";
import Link from "next/link";
import Head from 'next/head'
import utilities from "../utilities/utilities";
import { useState } from "react";
import { metadata } from "../metadata/aboutMetaData"; // Import metadata

export default function AboutUs() {
  let [page, setPage]=useState('about')
  return (
    <div>
    <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0]} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta name="twitter:card" content={metadata.twitter.card} />
      </Head>
      <Header page={page} setPage={setPage}></Header>
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
      <utilities.Footer></utilities.Footer>
    </div>
  );
}
