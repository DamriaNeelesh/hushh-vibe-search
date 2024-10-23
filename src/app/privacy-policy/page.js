
import React from "react";
import PrivacyPolicyPage from "../components/pagesComponent/privacyPage";
import utilities from "../components/utilities/utilities";
import Resources from '../resources/resources'

export const metadata = {
  title: "Privacy Policy - Vibe Search",
  description: "Read our privacy policy to understand how Vibe Search collects, uses, and protects your personal information.",
  keywords: "privacy policy, data protection, personal information, Vibe Search",
  openGraph: {
    title: "Privacy Policy - Vibe Search",
    description: "Learn about Vibe Search's privacy practices and how we safeguard your data.",
    images: [Resources.images.VibeLogo.src],
    url: "https://www.vibesearch.ai/privacy-policy",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const PrivacyPolicy = () => {
  return (
    <>
     <PrivacyPolicyPage></PrivacyPolicyPage>
     <utilities.Footer></utilities.Footer>

    </>
  );
};

export default PrivacyPolicy;
