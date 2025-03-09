"use client";
import Postcard from './Postcard';

const MushroomList = ({  }) => {
    
    return (
        <ul className="mushroom-list flex flex-wrap justify-center list-none">
            <Postcard name="Paddy Straw" image="/images/paddy_straw_sm.png" percentage={"90"}/>
            <Postcard name="Destroying Angel" warning="true" image="/images/destroying_angel_sm.png" percentage={"80"}/>
            <Postcard name="False Death Cap" warning="true" image="/images/false_death_cap_sm.png" percentage={"70"}/>
            <Postcard name="Puffball" image="/images/puffball_sm.png" percentage={"60"}/> 
        </ul>
    );
};

export default MushroomList;
