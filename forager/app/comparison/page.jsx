"use client";
import React, { useState } from 'react';
import NavBar from '../../components/NavBar';
import PageTitle from '@/components/PageTitle';
import Message from '@/components/Message';
import ComparisonTable from '@/components/ComparisonTable';
export default function MushroomComparisonPage() {
  const styles = {
    title: {
        fontWeight: 'bold',
        fontSize: '6vw', 
        color: '#203B5F',
        marginBottom: '10px',
        marginTop: '10px'
    },

    polaroid: {
      width: '90%',
      height: '220px',
      paddingTop: '25px',
      paddingBottom: '25px',
      paddingLeft: '10px',
      paddingRight: '10px',
      backgroundColor: 'white',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '20px',
      marginBottom: '20px',
    }
};


  return (
    <div className="page">
      <PageTitle title="Compare"/>
      <div className="page-content pt-[140px] pb-[120px]  px-6 flex flex-col items-center overflow-y">
        <Message header="warning" message="This is a toxic species, proceed with caution."/>
        <div></div>
        <div className="photos-container w-full flex justify-between items-center">
          <div className="w-1/2 flex flex-col justify-center items-center">
            <div style={styles.polaroid}><img className="w-full h-full object-cover" src="/images/user_img_lg.png" alt="user photo"/></div>
            <div style={styles.title}>Your Photo</div>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center">
            <div style={styles.polaroid}><img className="w-full h-full object-cover" src="/images/death_cap_lg.png" alt="mushroom image"/></div>
            <div style={styles.title}>Death Cap</div>
          </div>
        </div>

        <ComparisonTable/>
   

      </div>

      <NavBar />
    </div>
  );
}
