"use client";
import React, { useState, useEffect } from 'react';
import Postcard from './Postcard';
import { mushroomData } from '../data/development';

const MushroomList = ({ searchTerm, filterList, favorite, type }) => {

    const [mushrooms, setMushrooms] = useState(mushroomData);

    console.log("Current mushrooms:", mushrooms);
    // Effect to update mushrooms list when the favorite changes
    useEffect(() => {
        if (favorite.includes("Death Cap")) {
          setMushrooms((prevMushrooms) =>
            prevMushrooms.map((mushroom) =>
              mushroom.name === "Death Cap"
                ? { ...mushroom, filters: [...new Set([...mushroom.filters, "Favorites"])] }
                : mushroom
            )
          );
        }
      }, [favorite]); // Depend on `favorite`
      
      
      
    const filteredMushrooms = mushrooms.filter((mushroom) => {
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
