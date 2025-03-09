"use client";
import { useState, useEffect } from 'react';
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
  const [favorite, setFavorite] = useState([]); // Store favorite mushrooms

  useEffect(() => {
    // Function to clear localStorage on page refresh
    const handleBeforeUnload = () => {
      localStorage.clear();
    };

    // Attach the event listener when the component mounts
    window.addEventListener('beforeunload', handleBeforeUnload);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); 

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorite(storedFavorites);
  }, []);

  const toggleFilterPage = () => {
    setShowFilterPage(!showFilterPage); 
  };

  const handleSearch = (query) => {
    setSearchTerm(query);
  };

  const togglePill = (pillName) => {
    setActivePills((prev) => ({
      ...prev,
      [pillName]: !prev[pillName], 
    }));
  };

  return (
    <div> 
      {showFilterPage && <FilterPage activePills={activePills} togglePill={togglePill} onClose={toggleFilterPage}/>} 

      <DashboardTitle/>

      <div className="search-filter-container flex flex-row justify-center">
        <SearchBar onSearch={handleSearch} />
        <button className="filter-btn m-4 mt-8" onClick={toggleFilterPage}>
          <img className="filter-img" src="/icons/filter_icon.svg" alt="Filter"/>
        </button>
      </div>

      <div className="page h-auto flex flex-col items-center">
        <div className="mushroom-container p-4 pt-0 w-[90%] h-auto mt-8">
          <h1 className="collection-header text-[#203B5F] text-3xl font-bold">My Collection</h1>
          <PillList activePills={activePills} togglePill={togglePill}/> 
          <MushroomList searchTerm={searchTerm} filterList={activePills} favorite={favorite} type={"dashboard"} /> 
        </div>
      </div>

      <NavBar />
    </div>
  );
}
