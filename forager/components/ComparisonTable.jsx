import React from 'react';

const ComparisonTable = () => {
    return (
        <div className="flex bg-white py-4 w-full h-full my-10 font-bold text-[#203B5F]">
            <div className="photo-features w-1/3 flex flex-col items-center justify-center">
                <p>?</p>
                <p>?</p>
                <p>?</p>
                <p>?</p>
                <p>?</p>
                <p>?</p>
                <p>?</p>
                <p>?</p>
                <p>?</p>
            </div>
            {/* <div className="divider bg-gray-400 w-[2px]"></div> */}
            <div className="feature-list w-1/3 flex flex-col items-center justify-center border-x-2 border-[#203B5F]">
                <p>Cap Shape</p>
                <p>Cap Color</p>
                <p>Cap Texture</p>
                <p>Gill Type</p>
                <p>Gill Color</p>
                <p>Stem Shape</p>
                <p>Stem Color</p>
                <p>Stem Ring</p>
                <p>Habitat</p>
            </div>
            {/* <div className="divider bg-gray-400 w-[2px]"></div> */}
            <div className="match-features w-1/3 flex flex-col items-center justify-center">
                <p>?</p>
                <p>?</p>
                <p>?</p>
                <p>?</p>
                <p>?</p>
                <p>?</p>
                <p>?</p>
                <p>?</p>
                <p>?</p>
            </div>
        </div>
    );
};

export default ComparisonTable;