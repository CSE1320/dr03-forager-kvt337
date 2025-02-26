import React from 'react';
import { FaTimes } from 'react-icons/fa';

const styles = {
    title: {
        fontWeight: 'bold',
        fontSize: '6vw', 
        marginBottom: '10px'
    }
};
const FilterPage = () => {
    return (
        <div className="absolute w-full h-full z-50 flex items-center justify-center">
            <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="filter-pg-container w-[90%] h-[95%] bg-[#F2F2F2] rounded-lg flex flex-col z-10">
                <header className="header m-6 flex flex-row justify-between items-center">
                    <h1 className="text-lg font-bold mx-auto">FILTER</h1>
                    <button><FaTimes size={24} /></button>
                </header>
                <div className="filter-categories-container ml-10">
                    <h1 style={styles.title}>Tags</h1>

                    <h1 style={styles.title}>Regions</h1>

                    <h1 style={styles.title}>Category</h1>
                </div>
            </div>
        </div>
    );
};

export default FilterPage;