import styles from './SwipeLeftInstruction.module.scss'
export default function SwipeLeftInstruction(){
    return (
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
    )
}