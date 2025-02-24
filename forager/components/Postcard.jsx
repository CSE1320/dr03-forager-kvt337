import React from 'react';
//import {mushroomData} from '../data/development';

const Postcard = ({image, name, warning}) => {
    return (
        <li className="postcard m-2.5 flex flex-col items-center">
            <div className="polaroid-card relative w-24 h-32 bg-white shadow-[3px_3px_3px_2.5px_rgba(0,0,0,0.1)] ">
                <div className="polaroid flex flex-wrap justify-center">
                    <img className="mt-1" src={image} alt="mushroom image"/>
                    {warning ? (
                    <img className="warning absolute left-2.5 top-1.25" src={warningIcon} alt="warning icon"/>
                    ) : null}
                </div>
            </div>
            <div className="title mb-0.5 text-[#203B5F] text-center font-nunito text-[16px] font-semibold leading-normal">
                <p>{name}</p>
            </div>
        </li>
    );
};

export default Postcard;