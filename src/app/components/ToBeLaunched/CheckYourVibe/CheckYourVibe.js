import SwipeGame from "./SwipeGame/SwipeGame";
import styles from "./CheckYourVibe.module.css";
export default function CheckYourVibe() {
  return (
    <div className={`${styles.CheckYourVibe} figtree`}>
      <div className={`${styles.CheckYourVibe__Title}`}>Vibe Check</div>
      <div className={`${styles.CheckYourVibe__SubTitle}`}>
        Tell us your style - Click and swipe through different styles
      </div>
      <div className={`${styles.CheckYourVibe__SwipeGameMobile} figtree`}>
        <div className={`${styles.CheckYourVibe__AnimsWrapperMobile}`}>
          <div className={`${styles.CheckYourVibe__SwipeAnimWrapper}`}>
            <div className={`${styles.CheckYourVibe__SwipeAnimWrapperLeft}`}>
              <div className={`${styles.CheckYourVibe__SwipeLeftAnim}`}></div>
            </div>
            <div className={`${styles.CheckYourVibe__SwipeText}`}>
              <div className={`${styles.CheckYourVibe__SwipeTitle}`}>
                Not your vibe?
              </div>
              <div className={`${styles.CheckYourVibe__SwipeSubTitle}`}>
                Swipe Left
              </div>
            </div>
          </div>
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
        </div>
        <div className={`${styles.CheckYourVibe__SwipeGameMobile}`}>
          <SwipeGame></SwipeGame>
        </div>
      </div>
      <div className={`${styles.CheckYourVibe__SwipeGame} figtree`}>
        <div className={`${styles.CheckYourVibe__SwipeAnimWrapper}`}>
          <div className={`${styles.CheckYourVibe__SwipeAnimWrapperLeft}`}>
            <div className={`${styles.CheckYourVibe__SwipeLeftAnim}`}></div>
          </div>
          <div className={`${styles.CheckYourVibe__SwipeText}`}>
            <div className={`${styles.CheckYourVibe__SwipeTitle}`}>
              Not your vibe?
            </div>
            <div className={`${styles.CheckYourVibe__SwipeSubTitle}`}>
              Swipe Left
            </div>
          </div>
        </div>
        <SwipeGame></SwipeGame>
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
      </div>
    </div>
  );
}
