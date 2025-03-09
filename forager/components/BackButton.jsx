import React from 'react';
import Link from 'next/link';

const BackButton = () => {
    return (
        <button>
            <Link href="/mushroom">
                <img src="/icons/back_arrow.svg" alt="back arrow"/>
            </Link>
            
        </button>
    );
};


export default BackButton;