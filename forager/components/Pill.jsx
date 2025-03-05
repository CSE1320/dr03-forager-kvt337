import React from 'react';

const Pill = ({ text, onClick, isActive }) => {
    return (
        <div
            className={`pill mr-2 my-1 rounded-full px-5 text-white inline-block cursor-pointer ${isActive ? 'bg-[#579076]' : 'bg-gray-400'}`}
            onClick={onClick}
        >
            {text}
        </div>
    );
};

export default Pill;
