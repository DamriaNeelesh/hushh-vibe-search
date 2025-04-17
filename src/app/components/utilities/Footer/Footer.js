import Link from "next/link";
import styles from "./Footer.module.scss";
import config from "../../../resources/config/config";
import figtree from "../../../fonts/Figtree";

export default function Footer() {
  return (
    <footer className={`${styles.Footer}`} role="contentinfo" aria-label="Site footer">
      <div className={`${styles.AboutUs__UpperFooter} ${figtree.className}`}>
        <div className={`${styles.AboutUs__UpperFooterText}`}>
          Powered by{" "}
          <strong>
            <Link 
              href={"https://hushh.ai"} 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit Hushh website (opens in a new tab)"
            >
              hushh
            </Link>
          </strong>
        </div>
        <nav className={`${styles.AboutUs__RightWrapper}`} aria-label="Footer navigation">
          <Link
            className={`${styles.AboutUs__UpperFooterText}`}
            href={"/about-us"}
            aria-label="About us"
          >
            About
          </Link>
          <Link
            className={`${styles.AboutUs__UpperFooterText}`}
            href={"https://www.hush1one.com/contact-us"}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us (opens in a new tab)"
          >
            Contact us
          </Link>
          <Link
            className={`${styles.AboutUs__UpperFooterText}`}
            href={"/terms-of-use"}
            aria-label="Terms of use"
          >
            Terms
          </Link>
          <Link
            className={`${styles.AboutUs__UpperFooterText}`}
            href={"/privacy-policy"}
            aria-label="Privacy policy"
          >
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
