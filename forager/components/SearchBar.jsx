"use client";  // Ensures the component runs on the client

import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {  //accept onSearch from dashboard as a prop
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e) => {
    const st = e.target.value;
    setSearchTerm(st); //update local state
    onSearch(st); //update dashboard
    
  };

  return (
    <div className="relative w-[80%] mt-4">
      <form>
        <input
          type="text"
          placeholder="   Search for a mushroom"
          onChange={handleInputChange}
          value={searchTerm}
          className="search-bar p-4 pl-12 rounded-full w-full"
        />
        <img className="absolute left-4 top-1/2 transform -translate-y-1/2" src="/icons/search_icon.svg" alt="search icon" />
      </form>
    </div>
  );
};

export default SearchBar;
