import { useEffect, useState } from "react";
import services from "../../../../services/services";
export default function HistoryComponent() {
  let [historyArray, setHistoryArray] = useState([]);
  useEffect(() => {
    services.history.getHistory(setHistoryArray);
  }, []);
  return (
    <div>
      {historyArray.map((search_query, index) => {
        return <div key={index}>{search_query}</div>;
      })}
    </div>
  );
}
