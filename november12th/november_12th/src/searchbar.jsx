import { useContext } from "react"
import { searchTextContext } from "./searchTextContext"
export default function searchBar({searchText}){
    const searchTextContext = useContext(searchTextContext)
    
    return(
        <input type="text" className="searchBar"/>
    )
}