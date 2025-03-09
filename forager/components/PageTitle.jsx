import React from 'react';
import BackButton from './BackButton';

const PageTitle = ({ title }) => {
    return (
        <div className="z-[100] page-title fixed top-0 left-0 w-full h-[117px] p-4 flex justify-between items-end flex-shrink-0 rounded-b-[40px] bg-[#579076] shadow-[0px_4px_4px_0px_rgba(169,169,169,0.25)]">
            <BackButton/>
            <h1 className="mx-auto text-white text-center font-nunito text-[32px] font-bold leading-normal">{title}</h1>
        </div>
    );
};

export default PageTitle;