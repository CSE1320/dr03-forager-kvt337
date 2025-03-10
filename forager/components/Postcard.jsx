import Link from 'next/link';
import React from 'react';
import {mushroomData} from '../data/development';

const Postcard = ({image, name, warning, percentage}) => {
    return (
        <li className="postcard mx-[1%] flex flex-col items-center w-30 h-48">
            <div className="polaroid-card relative w-24 h-32 bg-white shadow-[3px_3px_3px_2.5px_rgba(0,0,0,0.1)] ">
                <Link href="/mushroom">
                    <div className="polaroid flex flex-wrap justify-center">
                        <img className="mt-1" src={image} alt="mushroom image"/>
                        {warning ? (
                            <img className="warning absolute left-1.5 top-[5px]" src="/icons/icon_warning_red.svg" alt="warning icon"/>
                        ) : null}
                        {percentage !== undefined ? (
                            <div className={`percentage absolute right-1.5 top-[5px] rounded-full px-1 text-xs text-white font-bold ${warning ? 'bg-[#FF6666]' : 'bg-[#73D89F]'}`}>
                                {percentage}%
                            </div>
                        ) : null}
                    </div>
                </Link>
            </div>
            <div className="title mb-0.5 text-[#203B5F] text-center font-nunito text-[16px] font-semibold leading-normal">
                <p className="mt-2 text-sm md:text-base lg:text-lg">{name}</p>
            </div>
        </li>
    );
};

export default Postcard;