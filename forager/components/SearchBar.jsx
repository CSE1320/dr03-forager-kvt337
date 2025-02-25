import React from 'react';

const SearchBar = () => {
  return (
    <div className="relative w-[80%] mt-4 ">
      <form>
        <input
          type="text"
          id="lname"
          name="lname"
          placeholder="   Search for a mushroom"
          className="search-bar p-4 pl-12 rounded-full w-full"
        />
        <img className="absolute left-4 top-1/2 transform -translate-y-1/2" src="/icons/search_icon.svg" alt="search icon image"/>
      </form>
    </div>
  );
};

export default SearchBar;
