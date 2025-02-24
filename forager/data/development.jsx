// data/development.js
const dummyData = {
    message: "This is dummy data from a config file",
    status: "success",
};

const warningMessage = {
    header: "warning",
    icon: "/icons/icon_warning.svg",
    message: "This is a toxic species, proceed with caution."
};

const mushroomData = [
    {
        name: "Death Cap",
        image: "/images/deathcap.jpg",
        warning: true,
    }
];

export default mushroomData;



// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export {warningMessage, dummyData, mushroomData}; // Requires import {warningMessage, dummyData} from './data/development.js';
