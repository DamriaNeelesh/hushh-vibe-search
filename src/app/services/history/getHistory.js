export default function getHistory(setHistoryArray){
    let historyArray=localStorage.getItem('vibe-history')
    console.log(historyArray)
    setHistoryArray(historyArray? JSON.parse(historyArray): [])
    return historyArray? JSON.parse(historyArray): [];
}