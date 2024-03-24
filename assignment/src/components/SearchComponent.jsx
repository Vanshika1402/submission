

import React from 'react';
import search from '../assets/search.jpg'
import './search.scss' 

const SearchComponent = () => {
  return (
    <div className="search-container">
      <button type="submit">
        <img src={search} alt="Search Icon" />
      </button>
      <input type="text" placeholder="Search something" />
      
    </div>
  );
};

export default SearchComponent;
