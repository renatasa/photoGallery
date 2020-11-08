import React from 'react';
import  './Modal.scss';
import Backdrop from '../Backdrop/Backdrop';
import Slideshow from '../../components/Slideshow/Slideshow';

const modal =(props)=>{
    
    return(
    <div>
    <Backdrop show={props.show} closeSlide={props.closeSlide}/>
    <div class={props.show ? "Modal" : "ModalClosed"}>
           <Slideshow slideshow={props.show}   
                      plusSlide={props.plusSlide}  
                      minusSlide={props.minusSlide} 
                      closeSlide={props.closeSlide}
                      currentImg={props.currentImg}/>
    </div>
    </div>
    )

}

export default modal;