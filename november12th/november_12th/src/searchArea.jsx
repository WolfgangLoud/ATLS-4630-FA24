import searchBar from "./searchbar";
import checkBox from "./checkBox";

export default function searchArea(searchText,showStockedOnly){
    return(
        <div className="list-container">
            <>
            <searchBar searchText={searchText}/>
            <checkBox showStockedOnly={showStockedOnly}/>
            </>
        </div>
    )
    
}