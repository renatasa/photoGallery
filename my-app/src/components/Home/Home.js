import React from 'react';
import './Home.scss';
import {NavLink} from 'react-router-dom';
import people from '../../assets/img/genre/people.jpg';
import landscape from '../../assets/img/genre/landscape.jpg';
import street from '../../assets/img/genre/street.jpg';
import reportage from '../../assets/img/genre/reportage.jpg';
import siluets from '../../assets/img/genre/siluets.jpg';
import travel from '../../assets/img/genre/travel.jpg';


export const home=()=>{

    return (
            <div class="home">
                thos is home

               <div class="home-logo">
                    <div class="logo">Logo</div>
               </div>

                <div class="home-links">

                <div class="home-sections">
                <NavLink to="/people"><div class ="imgParent"><img class="menuImg" src={people} alt={people}/></div></NavLink>
                <NavLink to="/landscape"><div class="imgParent"><img class="menuImg" src={landscape} alt={landscape}/></div> </NavLink>
                </div>

                <div  class="home-sections">
                <NavLink to="/street"><div class="imgParent"><img class="menuImg" src={street} alt={street}/></div> </NavLink>
                <NavLink to="/reportage"><div class="imgParent"><img class="menuImg" src={reportage} alt={reportage}/></div> </NavLink>
                </div>

                <div  class="home-sections">
                <NavLink to="/siluets"><div class="imgParent"><img class="menuImg" src={siluets} alt={siluets}/></div> </NavLink>
                <NavLink to="/travel"><div class="imgParent"><img class="menuImg" src={travel} alt={travel}/></div> </NavLink>
                </div>

                </div>

            </div>
        )
    }

export default home
