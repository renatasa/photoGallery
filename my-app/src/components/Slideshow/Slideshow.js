import React from 'react';
import './Slideshow.scss';

export const slideshow=(props)=>{
    
        return (
               
               <div class="slide">
                    <div class={!props.show ? "closedImg" : " "}>
                    <span class="close cursor" onClick={props.closeSlide}>&times;</span>
                    <a class="prev" onClick={props.minusSlide}>&#10094;</a>
                    <img  class={props.photoFade==null || props.photoFade==0 ? "slideImg fade" : "slideImg fade2"} src={props.currentImg} alt="imgOne"/> 
                    <a class="next" onClick={props.plusSlide}>&#10095;</a>
                    </div>
                </div>
                
               
        )
    }

export default slideshow