import React from 'react';

const DashboardTitle = () => {
    return (
        <div className="dashboard-title z-0 relative overflow-hidden w-full h-40 flex justify-between flex-row items-end justify-center" style={{ backgroundColor: '#397367' }}>
            <div className="greeting-container mb-8 ml-6">
                <h1 className="greeting text-white font-nunito text-[150%] font-normal leading-10">Hi,</h1>
                <h1 className="text-white font-nunito text-[300%] font-bold leading-10">Chantelle!</h1>
            </div>
            <div className="profile-picture mb-8 mr-6 w-10 h-10 rounded-full bg-[#5F464B] flex items-center justify-center">
                <h1 className="profile-letter text-white font-nunito text-[150%] font-normal leading-10">C</h1>
            </div>
            <img className="dashboard-bg absolute right-0 top-0 z-[-1]" src="/images/dashboard-bg.png" alt="mushroom image"/>
        </div>
    );
};

export default DashboardTitle;