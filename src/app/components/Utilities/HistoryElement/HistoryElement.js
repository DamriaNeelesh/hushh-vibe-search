import styles from './HistoryElement.module.css'
export default function HistoryElement(title){
    return (
        <div className={`${styles.historyElement}`}>
            <div className={`${styles.historyElement__title}`}>
                {title}
            </div>    
        </div>
    )
}