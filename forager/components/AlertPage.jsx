"use client";

import React, { useState } from 'react';
import Message from './Message';


const styles = {
    title: {
        fontWeight: 'bold',
        fontSize: '6vw', 
        marginBottom: '10px',
        marginTop: '30px'
    }
};

const AlertPage = ({onClose}) => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center z-10 backdrop-blur-md">
            <div className="flex flex-col items-center justify-center w-3/4">
                <Message 
                header="attention" 
                message="Our system can make mistakes! Remember to verify important information
                and use your own judgement to determine if any mushroom is safe. Be sure to use 
                the 'Report Error' button if you suspect a mistake."
                alert={true}
                onClose={onClose}/>
            </div>
        </div>
    );
};

export default AlertPage;