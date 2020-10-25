import React from 'react';
import './Home.scss';
import portraits from '../../assets/img/large/Portraits.jpg';
import landscape from '../../assets/img/large/Landscape.jpg';
import street from '../../assets/img/large/Street.jpg';
import reportage from '../../assets/img/large/Reportage.jpg';
import siluets from '../../assets/img/large/Siluets.jpg';
import travel from '../../assets/img/large/Travel.jpg';


export const home=()=>{
        
    return (
            <div class="home">
                thos is home

               <div class="home-logo">
                    <div class="logo">Logo</div>
               </div>

                <div class="home-links">

                <div class="home-sections">
                 <img class="testImg" src={portraits} alt={portraits}/>
                 <img class="testImg" src={landscape} alt={landscape}/>
                </div>

                <div  class="home-sections">
                    <img class="testImg" src={street} alt={street}/>
                    <img class="testImg" src={reportage} alt={reportage}/>
                </div>

                <div  class="home-sections">
                    <img class="testImg" src={siluets} alt={siluets}/>
                    <img class="testImg" src={travel} alt={travel}/>
                </div>

                </div>

            </div>
        )
    }

export default home
