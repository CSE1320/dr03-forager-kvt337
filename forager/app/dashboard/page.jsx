import NavBar from '../../components/NavBar'; 
import DashboardTitle from '@/components/DashboardTitle'; 
import SearchBar from '@/components/SearchBar';
import MushroomList from '@/components/MushroomList'; 

export default function DashboardPage() {
  const filterButton = (
    <button className="filter-btn m-4 mt-8">
      <img className="filter-img" src="/icons/filter_icon.svg" alt="Filter"/>
    </button>
  );
  
  return (
    <div className=""> 
      <DashboardTitle/>
      <div className="search-filter-container flex flex-row justify-center"></div>
      <div className="search-filter-container flex flex-row justify-center">
        <SearchBar/>
        {filterButton}
      </div>
      <div className="page h-auto flex flex-col items-center">

        <div className="mushroom-container p-4 pt-0 w-[90%] h-auto mt-8">
          <h1 className="collection-header text-[#203B5F] text-3xl font-bold">My Collection</h1>
          <MushroomList/>
        </div>

        <NavBar />
      </div>
    </div>
  );
}
