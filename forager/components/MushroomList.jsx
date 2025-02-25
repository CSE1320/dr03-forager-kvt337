import React from 'react';
import Postcard from './Postcard';
import {mushroomData} from '../data/development';
const MushroomList = () => {
    return (
        <ul className="mushroom-list flex flex-wrap list-none flex flex-wrap  mt-6">
            {mushroomData.map((mushroom, index) => (
                <Postcard 
                    key={index} 
                    image={mushroom.image} 
                    name={mushroom.name} 
                    warning={mushroom.warning} 
                />
            ))}
        </ul>
    );
};

export default MushroomList;