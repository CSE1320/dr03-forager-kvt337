import React from 'react';
import {warningMessage} from '../data/development';

const Message = ({header, message, alert, onClose}) => {
    return (
        <div className="message bg-red-500 rounded-xl bg-[#FF5050] text-sm w-full font-medium text-white px-4 py-4 mx-8 relative">
            {alert && (
                <button className="absolute top-2 right-2 text-white" onClick={onClose}>
                    &times;
                </button>
            )}
            <div className="header flex items-center">
                <img width="27px" height="27px" className="" src={warningMessage.icon}></img>
                <h1 className="uppercase">{header}</h1>
            </div>
            <p className="">{message}</p>
        </div>
    );
};

export default Message;