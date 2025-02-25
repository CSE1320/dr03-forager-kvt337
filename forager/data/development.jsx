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

const createMushroom = (name, image, warning) => ({
    name,
    image: `/images/${image}_sm.png`, 
    warning
});

const mushroomData = [
    createMushroom("Death Cap", "death_cap", true),
    createMushroom("Paddy Straw", "paddy_straw", false),
    createMushroom("Destroying Angel", "destroying_angel", true),
    createMushroom("False Death Cap", "false_death_cap", true),
    createMushroom("Puffball", "puffball", false),
];


export default mushroomData;



// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export {warningMessage, dummyData, mushroomData}; // Requires import {warningMessage, dummyData} from './data/development.js';
