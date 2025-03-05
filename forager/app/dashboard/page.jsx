"use client";
import { useState } from 'react';
import NavBar from '../../components/NavBar'; 
import DashboardTitle from '@/components/DashboardTitle'; 
import SearchBar from '@/components/SearchBar';
import MushroomList from '@/components/MushroomList';
import FilterPage from '@/components/FilterPage'; 
import PillList from '@/components/PillList';

export default function DashboardPage() {
  const [showFilterPage, setShowFilterPage] = useState(false); 
  const [searchTerm, setSearchTerm] = useState("");
  const [activePills, setActivePills] = useState({});

  const toggleFilterPage = () => {
    setShowFilterPage(!showFilterPage); 
  };

  const handleSearch = (query) => {
    setSearchTerm(query); //update search term when user types
  };


  const filterButton = (
    <button className="filter-btn m-4 mt-8" onClick={toggleFilterPage}>
      <img className="filter-img" src="/icons/filter_icon.svg" alt="Filter"/>
    </button>
  );

  // Function to toggle pill state
  const togglePill = (pillName) => {
    setActivePills((prev) => ({
      ...prev,
      [pillName]: !prev[pillName], // Toggle active state
    }));
  };

  return (
    <div> 
      {showFilterPage && <FilterPage activePills={activePills} togglePill={togglePill} onClose={toggleFilterPage}/>} 

      <DashboardTitle/>

      <div className="search-filter-container flex flex-row justify-center">
        <SearchBar onSearch={handleSearch} />  {/*pass handleSearch function */}
        {filterButton}
      </div>

      <div className="page h-auto flex flex-col items-center">
        <div className="mushroom-container p-4 pt-0 w-[90%] h-auto mt-8">
          <h1 className="collection-header text-[#203B5F] text-3xl font-bold">My Collection</h1>
          <PillList activePills={activePills} togglePill={togglePill}/> {/*pass type and active props to filter the list*/}
          <MushroomList searchTerm={searchTerm} filterList={activePills} /> {/*pass searchTerm to filter the list*/}
        </div>
      </div>

      <NavBar />
    </div>
  );
}
