"use client";

import React, { useState } from 'react';
import Pill from './Pill';
import PillList from './PillList';
import { pillData } from '../data/development';
import { FaTimes } from 'react-icons/fa';

const styles = {
    title: {
        fontWeight: 'bold',
        fontSize: '6vw', 
        marginBottom: '10px',
        marginTop: '30px'
    }
};

const FilterPage = ({activePills, togglePill, onClose}) => {


    return (
        <div className="absolute w-full h-full z-50 flex items-center justify-center">
            <div className="overlay absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
            <div className="filter-pg-container w-[90%] h-[95%] bg-[#F2F2F2] rounded-lg flex flex-col z-10">
                <header className="header mt-6 mx-6 flex flex-row justify-between items-center">
                    <h1 className="text-lg font-bold mx-auto">FILTER</h1>
                    <button onClick={onClose}><FaTimes size={24} /></button>
                </header>
                <div className="filter-categories-container py-10 pl-7 pr-2">
                    <h1 style={styles.title}>Tags</h1>
                    <PillList type="tag" activePills={activePills} togglePill={togglePill}/>

                    <h1 style={styles.title}>Regions</h1>
                    <PillList type="region" activePills={activePills} togglePill={togglePill}/>

                    <h1 style={styles.title}>Category</h1>
                    <PillList type="category" activePills={activePills} togglePill={togglePill}/>
                </div>
            </div>
        </div>
    );
};

export default FilterPage;