import styles from "./CompaniesMarquee.module.css";
import offWhite from "./resources/offWhite.svg";
export default function CompaniesMarquee() {
  let logos = [
    [offWhite, offWhite, offWhite],
    [offWhite, offWhite, offWhite],
    [offWhite, offWhite, offWhite],
    [offWhite, offWhite, offWhite],
  ];
  return (
    <div className={`${styles.CompaniesMarquee}`}>
      {logos.map((logoArray, index) => {
        return (
          <marquee
            className={`${styles.CompaniesMarquee__Marquee}`}
            direction={index % 2 == 0 ? "left" : "right"}
          >
            <div className={styles.CompaniesMarquee__logoRow}>
              {logoArray.map((logo) => {
                return (
                  <img
                    src={logo.src}
                    alt="logo"
                    className={styles.CompaniesMarquee__Logo}
                  />
                );
              })}
            </div>
          </marquee>
        );
      })}
    </div>
  );
}
