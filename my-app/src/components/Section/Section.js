import React, { Component } from 'react';
import './Section.scss';
import {NavLink} from 'react-router-dom';
import Modal from '../Modal/Modal';

export class Section extends Component {
    constructor() {
        super();  
        this.state={
            slideshow: false,
            selectedPhoto: null, 
            selectedPhotoKey:null,
            allPhotosSmall:[], 
            allPhotosLarge:[], 
            photoFade: null
        }
    }

    componentDidMount(){
      let  photoSource=[];
      let  photoSourceLarge=[];
      let halflength= Object.values(this.props).length/2;

        for (let i=0; i<Object.values(this.props).length/2; i++){
                photoSource.push(Object.values(this.props)[i])
            
        }

        for (let i=halflength; i<Object.values(this.props).length; i++){
                photoSourceLarge.push(Object.values(this.props)[i])    
        }

        this.setState({allPhotosSmall: photoSource, allPhotosLarge: photoSourceLarge});
    }


   

    openSlide=(x, y)=>{
        this.setState({slideshow: true, selectedPhoto: x, selectedPhotoKey:y})
    }   

    
    closeSlide=()=>{
        this.setState({slideshow: false, selectedPhoto: null, selectedPhotoKey: null, photoFade: null})
    }   

    plusSlide=()=>{
        let fade=null;
        let x=null;
        if(this.state.selectedPhotoKey<this.state.allPhotosLarge.length-1){
            x=this.state.selectedPhotoKey+1;
            if (x%2==0){
                fade=0
            } else {
                fade=1;
            }
            this.setState({selectedPhoto: this.state.allPhotosLarge[this.state.selectedPhotoKey+1], selectedPhotoKey: x, photoFade: fade})
           
        } else  if(this.state.selectedPhotoKey=this.state.allPhotosLarge.length-1){
            let x=0;
            fade= 0;
            this.setState({selectedPhoto: this.state.allPhotosLarge[0], selectedPhotoKey: x, photoFade: fade})
        }
        
       
    }

    minusSlide=()=>{
        console.log('minus slide ', this.state.selectedPhotoKey);
        if(this.state.selectedPhotoKey>0){
            let x=this.state.selectedPhotoKey-1;
            this.setState({selectedPhoto: this.state.allPhotosLarge[this.state.selectedPhotoKey-1], selectedPhotoKey: x})
        } 
        
        if(this.state.selectedPhotoKey==0){
            let x=this.state.allPhotosLarge.length-1;
            this.setState({selectedPhoto: this.state.allPhotosLarge[x], selectedPhotoKey: x})
        }
    }


    render() {
        console.log('fade ', this.state.photoFade)
        let result=null;
             result =<div class="home">

            <div class="menu">
            <div class="home-logo">
                 <div class="logo">Logo</div>
            </div>
            <NavLink to="/people" style={{ textDecoration: 'none', fontSize: '2rem',  letterSpacing: '5px', fontWeight: '10' }}>  <div >people</div></NavLink>
            <NavLink to="/landscape"  style={{ textDecoration: 'none', fontSize: '2rem',  letterSpacing: '5px', fontWeight: '10' }} ><div>landscape</div></NavLink> 
            <NavLink to="/street" style={{ textDecoration: 'none', fontSize: '2rem',  letterSpacing: '5px', fontWeight: '10' }} ><div>street</div></NavLink> 
            <NavLink to="/reportage" style={{ textDecoration: 'none', fontSize: '2rem',  letterSpacing: '5px', fontWeight: '10' }} ><div>reportage</div></NavLink> 
            <NavLink to="/siluets" style={{ textDecoration: 'none', fontSize: '2rem',  letterSpacing: '5px', fontWeight: '10' }} ><div>siluets</div></NavLink> 
            <NavLink to="/travel" style={{ textDecoration: 'none', fontSize: '2rem',  letterSpacing: '5px', fontWeight: '10' }} ><div>travel</div></NavLink> 
            </div>
     
             <div class="photos">
             <div class="photo-row">
              <img class="rowImg" onClick={()=>this.openSlide(this.props.oneL, 0)} src={this.props.one} alt="imgOne"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.twoL, 1)} src={this.props.two} alt="imgTwo"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.threeL, 2)} src={this.props.three} alt="imgThree"/>
             </div>
     
             <div class="photo-row">
              <img class="rowImg" onClick={()=>this.openSlide(this.props.fourL, 3)} src={this.props.four} alt="imgFour"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.fiveL, 4)} src={this.props.five} alt="imgFive"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.sixL, 5)} src={this.props.six} alt="imgSix"/>
             </div>
     
             <div class="photo-row">
              <img class="rowImg" onClick={()=>this.openSlide(this.props.sevenL, 6)} src={this.props.seven} alt="imgSeven"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.eightL, 7)} src={this.props.eight} alt="imgEight"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.nineL, 8)} src={this.props.nine} alt="imgNine"/>
             </div>
     
             <div class="photo-row">
              <img class="rowImg" onClick={()=>this.openSlide(this.props.tenL, 9)} src={this.props.ten} alt="imgTen"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.elevenL, 10)} src={this.props.eleven} alt="imgEleven"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.twelveL, 11)} src={this.props.twelve} alt="imgTwelve"/>
             </div>
     
             <div class="photo-row">
              <img class="rowImg" onClick={()=>this.openSlide(this.props.thirteenL, 12)} src={this.props.thirteen} alt="imgThirteen"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.fourteenL, 13)} src={this.props.fourteen} alt="imgFourteen"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.fifteenL, 14)} src={this.props.fifteen} alt="imgFifteen"/>
             </div>
     
             
             <div class="photo-row">
              <img class="rowImg" onClick={()=>this.openSlide(this.props.sixteenL, 15)} src={this.props.sixteen} alt="imgSeventeen"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.seventeenL, 16)} src={this.props.seventeen} alt="imgEighteen"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.eighteenL, 17)} src={this.props.eighteen} alt="imgTwenty"/>
             </div>
     
             </div>
             
     
         </div>
       
        return (
            <div>
                {result}
                <Modal show={this.state.slideshow} 
                       plusSlide={this.plusSlide}  
                       minusSlide={this.minusSlide} 
                       closeSlide={this.closeSlide}
                       currentImg={this.state.selectedPhoto}
                       photoFade={this.state.photoFade}/> 
            </div>
        )
    }
}

export default Section
