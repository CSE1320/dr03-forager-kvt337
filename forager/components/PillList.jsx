import React from 'react';
import Pill from './Pill';
import { pillData } from '../data/development';

const PillList = ({ type, activePills, togglePill }) => {
    const filteredPills = pillData.filter(pill => pill.type === type);
    if(type){
        return (
            <ul className="pill-list flex flex-wrap list-none mt-2">
                {filteredPills.map((pill, index) => {
                    return (
                        <Pill 
                            key={index} 
                            text={pill.name} 
                            onClick={() => togglePill(pill.name)}
                            isActive={activePills[pill.name] || false} 
                        />
                    );
                })}
            </ul>
        );
    }
    else{
        return (
            <ul className="pill-list flex flex-wrap list-none mt-2 mb-10">
                {pillData.filter(pill => activePills[pill.name]).map((pill, index) => {
                    return (
                        <Pill 
                            key={index} 
                            text={pill.name} 
                            onClick={() => togglePill(pill.name)}
                            isActive={true} 
                        />
                    );
                })}
            </ul>
        );
    }

};

export default PillList;
