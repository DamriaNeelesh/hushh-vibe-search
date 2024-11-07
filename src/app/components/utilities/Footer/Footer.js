import Link from "next/link";
import styles from "./Footer.module.css";
import config from "../../../resources/config/config";
import figtree from "../../../fonts/Figtree";
export default function Footer() {
  return (
    <div className={`${styles.Footer}`}>
      <div className={`${styles.AboutUs__UpperFooter} ${figtree.className}`}>
        <div className={`${styles.AboutUs__UpperFooterText}`}>
          Powered by{" "}
          <strong>
            <Link href={"https://hushh.ai"} target="_blank">
              hushh
            </Link>
          </strong>
        </div>
        <div className={`${styles.AboutUs__RightWrapper}`}>
          <Link
            className={`${styles.AboutUs__UpperFooterText}`}
            href={"/about-us"}
          >
            About
          </Link>
          <Link
            className={`${styles.AboutUs__UpperFooterText}`}
            href={"https://www.hush1one.com/contact-us"}
          >
            Contact us
          </Link>
          <Link
            className={`${styles.AboutUs__UpperFooterText}`}
            href={"/terms-of-use"}
          >
            Terms
          </Link>
          <Link
            className={`${styles.AboutUs__UpperFooterText}`}
            href={"/privacy-policy"}
          >
            Privacy
          </Link>
        </div>
      </div>
    </div>
  );
}
