import React from 'react';
import Postcard from './Postcard';
import { mushroomData } from '../data/development';

const MushroomList = ({ searchTerm, filterList }) => {
    const filteredMushrooms = mushroomData.filter((mushroom) => {
        const matchesSearch = mushroom.name.toLowerCase().includes(searchTerm.toLowerCase());
    
        const matchesFilters =
            Object.values(filterList).every(value => value === false)
            ? true // If all filters are false, show only matchesSearch
            : Object.keys(filterList).some(filter =>
                filterList[filter] && mushroom.filters.includes(filter) // ✅ At least one filter should match
            );
    
        return matchesSearch && matchesFilters;
    });
    
    
    return (
        <ul className="mushroom-list flex flex-wrap list-none">
            {filteredMushrooms.length > 0 ? (
                filteredMushrooms.map((mushroom, index) => (
                    <Postcard 
                        key={index} 
                        image={mushroom.image} 
                        name={mushroom.name} 
                        warning={mushroom.warning} 
                    />
                ))
            ) : (
                <p className="text-gray-500 text-center w-full">No mushrooms found.</p>
            )}
        </ul>
    );
};

export default MushroomList;
