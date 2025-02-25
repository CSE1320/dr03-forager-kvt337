import NavBar from '../../components/NavBar'; // Adjust the path as necessary
import DashboardTitle from '@/components/DashboardTitle'; // Adjust the path as necessary
import SearchBar from '@/components/SearchBar';
import MushroomList from '@/components/MushroomList'; 

export default function DashboardPage() {
  const filterButton = (
    <button className="filter-btn m-4 mt-8">
      <img className="filter-img" src="/icons/filter_icon.svg" alt="Filter"/>
    </button>
  );
  
  
  return (
    <>
      <DashboardTitle/>
      <div className="search-filter-container flex flex-row justify-center">
        <SearchBar/>
        {filterButton}
      </div>
      <div className="page flex flex-col items-center">

        <div className="mushroom-container w-[90%] l-[80%] mt-8">
          <h1 className="collection-header ml-4 text-[#203B5F] text-3xl font-semibold">My Collection</h1>
          <MushroomList/>
        </div>

        <NavBar />
      </div>
    </>
  );
}
