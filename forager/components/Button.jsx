import React from 'react';

const Button = ({ text, color }) => {
    return (
        <button className={`bg-${color}-500 text-white text-lg px-4 py-2 rounded-lg`}>
            {text}
        </button>
    );
};

export default Button;
