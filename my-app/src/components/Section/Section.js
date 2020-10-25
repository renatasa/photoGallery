import React from 'react';
import './Section.scss';
import one from '../../assets/img/large/1.jpg';
import two from '../../assets/img/large/2.jpg';
import three from '../../assets/img/large/3.jpg';
import four from '../../assets/img/large/4.jpg';
import five from '../../assets/img/large/5.jpg';
import six from '../../assets/img/large/6.jpg';
import seven from '../../assets/img/large/7.jpg';
import eight from '../../assets/img/large/8.jpg';
import nine from '../../assets/img/large/9.jpg';
import ten from '../../assets/img/large/10.jpg';
import eleven from '../../assets/img/large/11.jpg';
import twelve from '../../assets/img/large/12.jpg';
import thirteen from '../../assets/img/large/13.jpg';
import fourteen from '../../assets/img/large/14.jpg';
import fifteen from '../../assets/img/large/15.jpg';
import sixteen from '../../assets/img/large/16.jpg';
import seventeen from '../../assets/img/large/17.jpg';
import eighteen from '../../assets/img/large/18.jpg';
import nineteen from '../../assets/img/large/19.jpg';
import twenty from '../../assets/img/large/20.jpg';


export const section=()=>{
        
    return (
            <div class="home">
                thos is home

               <div class="menu">
               <div class="home-logo">
                    <div class="logo">Logo</div>
               </div>
                    <div class="section-title">people</div>
                    <div class="section-title">landscape</div>
                    <div class="section-title">street</div>
                    <div class="section-title">reportage</div>
                    <div class="section-title">siluets</div>
                    <div class="section-title">travel</div>
               </div>

                <div class="home-links">

                <div class="photo-row">
                 <img class="rowImg" src={one} alt="imgOne"/>
                 <img class="rowImg" src={two} alt="imgTwo"/>
                 <img class="rowImg" src={three} alt="imgThree"/>
                </div>

                <div class="photo-row">
                 <img class="rowImg" src={four} alt="imgFour"/>
                 <img class="rowImg" src={five} alt="imgFive"/>
                 <img class="rowImg" src={six} alt="imgSix"/>
                </div>

                <div class="photo-row">
                 <img class="rowImg" src={seven} alt="imgSeven"/>
                 <img class="rowImg" src={eight} alt="imgEight"/>
                 <img class="rowImg" src={nine} alt="imgNine"/>
                </div>

                <div class="photo-row">
                 <img class="rowImg" src={ten} alt="imgTen"/>
                 <img class="rowImg" src={eleven} alt="imgEleven"/>
                 <img class="rowImg" src={twelve} alt="imgTwelve"/>
                </div>

                <div class="photo-row">
                 <img class="rowImg" src={thirteen} alt="imgThirteen"/>
                 <img class="rowImg" src={fourteen} alt="imgFourteen"/>
                 <img class="rowImg" src={fifteen} alt="imgFifteen"/>
                </div>

                
                <div class="photo-row">
                 <img class="rowImg" src={sixteen} alt="imgSeventeen"/>
                 <img class="rowImg" src={seventeen} alt="imgEighteen"/>
                 <img class="rowImg" src={eighteen} alt="imgTwenty"/>
                </div>

                </div>

            </div>
        )
    }

export default section