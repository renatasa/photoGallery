import React from 'react';
import './Home.scss';
import {NavLink} from 'react-router-dom';
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
                <NavLink to="/people"><img class="testImg" src={portraits} alt={portraits}/></NavLink>
                <NavLink to="/landscape"><img class="testImg" src={landscape} alt={landscape}/> </NavLink>
                </div>

                <div  class="home-sections">
                <NavLink to="/street"> <img class="testImg" src={street} alt={street}/></NavLink>
                <NavLink to="/reportage">   <img class="testImg" src={reportage} alt={reportage}/></NavLink>
                </div>

                <div  class="home-sections">
                <NavLink to="/siluets"><img class="testImg" src={siluets} alt={siluets}/></NavLink>
                <NavLink to="/travel"><img class="testImg" src={travel} alt={travel}/></NavLink>
                </div>

                </div>

            </div>
        )
    }

export default home
