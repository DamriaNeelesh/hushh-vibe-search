import styles from "./SwipeRightInstructionMobile.module.css";
export default function SwipeRightInstructionMobile() {
  return (
    <div className={`${styles.CheckYourVibe__SwipeAnimWrapper}`}>
      <div className={`${styles.CheckYourVibe__SwipeAnimWrapperRight}`}>
        <div className={`${styles.CheckYourVibe__SwipeRightAnim}`}></div>
      </div>
      <div className={`${styles.CheckYourVibe__SwipeText}`}>
        <div className={`${styles.CheckYourVibe__SwipeTitle}`}>
          Sounds like your vibe?
        </div>
        <div className={`${styles.CheckYourVibe__SwipeSubTitle}`}>
          Swipe Right
        </div>
      </div>
    </div>
  );
}
