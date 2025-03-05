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

const createMushroom = (name, image, warning, filters) => ({
    name,
    image: `/images/${image}_sm.png`, 
    warning,
    filters
});

const createPill = (name, type) => ({
    name,
    type
});




export const pillData = [
    createPill("Favorites", "tag"),
    createPill("Recent", "tag"),
    createPill("Texas", "region"),
    createPill("North America", "region"),
    createPill("South America", "region"),
    createPill("Asia", "region"),
    createPill("Europe", "region"),
    createPill("Africa", "region"),
    createPill("Poisonous", "category"),
    createPill("Medicinal", "category"),
    createPill("Mythical", "category"),
    createPill("Good For Broths", "category"),
];

const mushroomData = [
    createMushroom("Death Cap", "death_cap", true, ["Recent","North America","Europe","Poisonous"]),
    createMushroom("Paddy Straw", "paddy_straw", false, ["Asia","Medicinal", "Good For Broths"]),
    createMushroom("Destroying Angel", "destroying_angel", true, ["North America","Europe","Poisonous"]),
    createMushroom("False Death Cap", "false_death_cap", true, ["North America","Europe","Poisonous"]),
    createMushroom("Puffball", "puffball", false, ["North America","Europe","Medicinal"]),
];


export default {mushroomData, pillData};



// Two flavors of exporting:
// export default dummyData; // Requires import dummyData from './data/development.js';

// More than one export.
export {warningMessage, dummyData, mushroomData, pillData}; // Requires import {warningMessage, dummyData} from './data/development.js';
