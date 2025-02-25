import Link from 'next/link';
import NavBar from '../../components/NavBar';
import PageTitle from '@/components/PageTitle';
import Button from '@/components/Button';
import Message from '@/components/Message';
import Postcard from '@/components/Postcard';
import '@/styles/globals.css';

export default function MushroomPage() {
  return (
    <div className="page flex flex-col items-center">
      <PageTitle title="Match Results"/>

      <div className="page-items mt-[120px] flex flex-col items-center w-[80%] overflow-y">
        <div className="report-error-container w-[100%] flex flex-row justify-between items-center mt-4 mb-6">
          <p>Not what you expected?</p>
          <Button text="Report error" color="red" />
        </div>

        <Message/>

        <div className="compare-btn w-[100%] flex justify-end">
          <Link href="/comparison">
            <button className="m-4 text-gray-500">Compare {">"}</button>
          </Link> 
        </div>

        <div className="polaroid-container flex justify-center bg-white w-[100%] h-[290px] shadow-[3px_3px_3px_2.5px_rgba(0,0,0,0.1)]">
          <img className="w-[310px] h-[260px] mt-2" src="/images/death_cap_lg.png"/>
        </div>

        <div className="header flex flex row justify-between w-[100%]">
          <div className="name my-4 flex flex-col justify-start w-[100%]">
            <h1 className="name my-2 text-[#203B5F] text-4xl font-semibold">Death Cap</h1>
            <h2 className="scientific-name text-xl text-gray-500 italic">Amanita phalloides</h2>
          </div>
          <button><img className="w-[80%] h-[80%]" src="/icons/add_btn.svg" alt="add to collection"/></button>
        </div>

        <div className="fast-facts mb-6 p-6 bg-[#8E4A49] w-[100%] h-[auto] flex flex-col rounded-3xl">
          <h1 className="mb-2 text-white font-nunito text-2xl font-bold leading-[25px]">Fast Facts</h1>
          <div className="fact">
            <h2>Cap Diameter:</h2><p>5-15cm</p>
          </div>
          <div className="fact">
            <h2>Gill Color:</h2><p>White</p>
          </div>
          <div className="fact">
            <h2>Stem Color:</h2><p>White</p>
          </div>
          <div className="fact">
            <h2>Habitat:</h2><p>Temperate region</p>
          </div>
        </div>

        <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur.
        </p>

        <div className="similar-matches-container mb-10">
          <h1 className="title mt-8 mb-0 text-[#324053] text-center font-nunito text-[30px] font-bold leading-normal">Similar Matches</h1>
          <div className="matches p-8 flex flex-row flex-wrap justify-between">
            <Postcard name="Paddy Straw" image="/images/paddy_straw_sm.png"/>
            <Postcard name="Destroying Angel" warning="true" image="/images/destroying_angel_sm.png"/>
            <Postcard name="False Death Cap" warning="true" image="/images/false_death_cap_sm.png"/>
            <Postcard name="Puffball" image="/images/puffball_sm.png"/>
          </div>
          
        </div>
        
      </div>
      <NavBar />
    </div>
  );
}
