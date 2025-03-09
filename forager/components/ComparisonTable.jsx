"use client";
import React, { useState } from 'react';

const ComparisonTable = () => {
    const [userInput, setUserInput] = useState({
        capShape: 'Flat',
        capColor: 'Yellow',
        capTexture: 'Smooth',
        gillType: 'Free',
        gillColor: 'White',
        stemShape: 'Slender',
        stemColor: 'White',
        stemRing: 'Absent',
        habitat: '?'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInput((prev) => ({ ...prev, [name]: value }));
    };

    const handleClear = (field) => {
        setUserInput((prev) => ({ ...prev, [field]: '' }));
    };

    const styles = {
        p: {
            marginTop: '10px',
            marginBottom: '10px',
        },
        inputContainer: {
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
        },
        input: {
            marginTop: '10px',
            marginBottom: '10px',
            borderBottom: '1px solid #203B5F',
            textAlign: 'center',
            width: '70%',
        },
    };

    return (
        <div className="flex bg-white pt-2 pb-4 w-full h-full font-bold text-[#203B5F]">
            {/* User Photo Features Column */}
            <div className="photo-features w-1/3 flex flex-col items-center justify-center">
                {Object.keys(userInput).map((key, index) => (
                    <div key={key} style={styles.inputContainer}>
                        <button onClick={() => handleClear(key)}>
                            <div className="bg-gray-200 rounded-full w-4 h-4 flex items-center justify-center">
                                <p className="text-xs font-semibold text-gray-500">x</p>
                            </div>
                        </button>
                        <input 
                            type="text" 
                            name={key} 
                            value={userInput[key]} 
                            onChange={handleChange}
                            placeholder={["Cap Shape", "Cap Color", "Cap Texture", "Gill Type", "Gill Color", "Stem Shape", "Stem Color", "Stem Ring", "Habitat"][index]} 
                            style={styles.input} 
                        />
                    </div>
                ))}
            </div>

            {/* Feature Labels Column */}
            <div className="feature-list w-1/3 flex flex-col items-center justify-center border-x-2 border-[#203B5F]">
                {["Cap Shape", "Cap Color", "Cap Texture", "Gill Type", "Gill Color", "Stem Shape", "Stem Color", "Stem Ring", "Habitat"].map((feature) => (
                    <p key={feature} style={styles.p}>{feature}</p>
                ))}
            </div>

            {/* Default Death Cap Features Column */}
            <div className="match-features w-1/3 flex flex-col items-center justify-center">
                {["Flat", "Yellow", "Smooth", "Free", "White", "Slender", "White", "Absent", "Near oak/beech"].map((defaultValue, index) => (
                    <p key={index} style={styles.p}>{defaultValue}</p>
                ))}
            </div>
        </div>
    );
};

export default ComparisonTable;
