import React from "react";
import { HiSearch } from "react-icons/hi";
import styles from "./searchbar.module.css";

export interface SearchBarProps {
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ placeholder }) => {
  return (
      <div className={styles.search_bar}>
        <HiSearch className={styles.search_icon}/>
        <input type="text" placeholder={placeholder}/>
      </div>
  );
};

export default SearchBar;
