import React from 'react';
import randomImg from '../../assets/img/genre/landscape.jpg';
import './Slideshow.scss';

export const slideshow=(props)=>{
    // let plusSlide=()=>{

    // }

    // let minusSlide=()=>{
        
    // }
    
        return (

               <div class="slide">
                   <span class="close cursor" onClick={props.closeSlide}>&times;</span>
               <div>this is slideshow</div>
               
                    <a class="prev" onClick={props.minusSlide}>&#10094;</a>
                    <img class="slideImg"  src={props.randomImg2} alt="imgOne"/>
                    <a class="next" onClick={props.plusSlide}>&#10095;</a>
                   
                </div>
               
        )
    }

export default slideshow