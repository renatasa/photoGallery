import React from 'react';
import './Section.scss';
import {NavLink} from 'react-router-dom';

export const section=(props)=>{
        
    return (
        <div class="home">


       <div class="menu">
       <div class="home-logo">
            <div class="logo">Logo</div>
       </div>
       <NavLink to="/people">  <div class="section-title">people</div></NavLink>
       <NavLink to="/landscape"><div class="section-title">landscape</div></NavLink> 
       <NavLink to="/street"><div class="section-title">street</div></NavLink> 
       <NavLink to="/reportage"><div class="section-title">reportage</div></NavLink> 
       <NavLink to="/siluets"><div class="section-title">siluets</div></NavLink> 
       <NavLink to="/travel"><div class="section-title">travel</div></NavLink> 
       </div>



        <div class="photos">
        <div class="photo-row">
         <img class="rowImg" src={props.one} alt="imgOne"/>
         <img class="rowImg" src={props.two} alt="imgTwo"/>
         <img class="rowImg" src={props.three} alt="imgThree"/>
        </div>

        <div class="photo-row">
         <img class="rowImg" src={props.four} alt="imgFour"/>
         <img class="rowImg" src={props.five} alt="imgFive"/>
         <img class="rowImg" src={props.six} alt="imgSix"/>
        </div>

        <div class="photo-row">
         <img class="rowImg" src={props.seven} alt="imgSeven"/>
         <img class="rowImg" src={props.eight} alt="imgEight"/>
         <img class="rowImg" src={props.nine} alt="imgNine"/>
        </div>

        <div class="photo-row">
         <img class="rowImg" src={props.ten} alt="imgTen"/>
         <img class="rowImg" src={props.eleven} alt="imgEleven"/>
         <img class="rowImg" src={props.twelve} alt="imgTwelve"/>
        </div>

        <div class="photo-row">
         <img class="rowImg" src={props.thirteen} alt="imgThirteen"/>
         <img class="rowImg" src={props.fourteen} alt="imgFourteen"/>
         <img class="rowImg" src={props.fifteen} alt="imgFifteen"/>
        </div>

        
        <div class="photo-row">
         <img class="rowImg" src={props.sixteen} alt="imgSeventeen"/>
         <img class="rowImg" src={props.seventeen} alt="imgEighteen"/>
         <img class="rowImg" src={props.eighteen} alt="imgTwenty"/>
        </div>

        </div>
        

    </div>
        )
    }

export default section