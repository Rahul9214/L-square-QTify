// import React from "react";
import styles from "./SearchBar.module.css";
// import SearchIcon from "../../assets/search-icon.svg";

const SearchBar = ({ placeholder }) => {
    return (
        <>
            <div>
                <input className={styles.search} placeholder={placeholder} />
            </div>
            <div>
                <button className={styles.searchButton} type="submit" >
                    {/* <SearchIcon /> */}
                </button>
            </div>
        </>
      
    )
}

export default SearchBar;