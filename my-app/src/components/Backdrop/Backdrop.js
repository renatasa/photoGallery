import React from 'react';

import './Backdrop.scss'

const backdrop =(props)=>(
    props.show ? <div class="Backdrop" onClick={props.closeSlide}></div> :null
)

export default backdrop;