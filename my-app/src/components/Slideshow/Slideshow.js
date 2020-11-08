import React from 'react';
import './Slideshow.scss';

export const slideshow=(props)=>{
    
        return (
               <div>
               <div class="slide">
                   <span class="close cursor" onClick={props.closeSlide}>&times;</span>
               
                    <a class="prev" onClick={props.minusSlide}>&#10094;</a>
                    <img class="slideImg"  src={props.currentImg} alt="imgOne"/>
                    <a class="next" onClick={props.plusSlide}>&#10095;</a>
                   
                </div>
                </div>
               
        )
    }

export default slideshow