import { Suspense } from "react"
import SearchResults from "./SearchResults"
export default function Page() {
    return (<Suspense fallback={
        <div>
            loading...
        </div>
    }>
        <SearchResults></SearchResults>
    </Suspense>
    )
}