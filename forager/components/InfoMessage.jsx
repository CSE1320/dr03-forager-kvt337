import React from 'react';

const InfoMessage = ({message}) => {
    const [isVisible, setIsVisible] = React.useState(true);

    if (!isVisible) return null;
    return (

        <div className="message rounded-xl bg-[#6BC591] text-sm w-full font-medium text-white px-4 py-4 mx-8 relative">
         
            <button className="close-btn absolute top-2 right-2 text-white" onClick={() => setIsVisible(false)}>
                &times;
            </button>
         
            <p className="">{message}</p>
        </div>
    );
};

export default InfoMessage;