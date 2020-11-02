import React, { Component } from 'react';
import './Section.scss';
import {NavLink} from 'react-router-dom';
import Slideshow from '../Slideshow/Slideshow';

export class Section extends Component {
    constructor() {
        super();  
        this.state={
            slideshow: false,
            selectedPhoto: null, 
            selectedPhotoKey:null,
            allPhotos:[]
    
        }
    }

    componentDidMount(){
      let  photoSource=[];
      console.log('component did mount this props ',  Object.values(this.props)[0])
      console.log(' props length ',  Object.values(this.props).length)

        for (let i=0; i<Object.values(this.props).length; i++){
            photoSource.push(Object.values(this.props)[i])
        }

        console.log('photo source ', photoSource)

        this.setState({allPhotos: photoSource});
    }

   

    openSlide=(x, y)=>{
        this.setState({slideshow: true, selectedPhoto: x, selectedPhotoKey:y})
    }   

    
    closeSlide=()=>{
        this.setState({slideshow: false, selectedPhoto: null, selectedPhotoKey: null})
    }   

    plusSlide=()=>{
        console.log('plus slide ', this.state.selectedPhoto );
        console.log('plus slide photo key ', this.state.allPhotos[this.state.selectedPhoto] )
        console.log('lala');
        if(this.state.selectedPhotoKey<this.state.allPhotos.length){
            let x=this.state.selectedPhotoKey+1;
            this.setState({selectedPhoto: this.state.allPhotos[this.state.selectedPhotoKey+1], selectedPhotoKey: x})
        }
       
    }

    minusSlide=()=>{
        console.log('minus slide ');
        if(this.state.selectedPhotoKey>0){
            let x=this.state.selectedPhotoKey-1;
            this.setState({selectedPhoto: this.state.allPhotos[this.state.selectedPhotoKey-1], selectedPhotoKey: x})
        }
    }


    render() {
        console.log('state', this.state);

        let result=null;
    
        // let imgSourceArr=[];
    
        // for(let i=0; i<this.props.length;i++){
        //     imgSourceArr[i]=Object.values(this.props)[i] ;
        // }
    
        if(!this.state.slideshow){
             result =<div class="home">


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
              <img class="rowImg" onClick={()=>this.openSlide(this.props.one, 0)} src={this.props.one} alt="imgOne"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.two, 1)} src={this.props.two} alt="imgTwo"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.three, 2)} src={this.props.three} alt="imgThree"/>
             </div>
     
             <div class="photo-row">
              <img class="rowImg" onClick={()=>this.openSlide(this.props.four, 3)} src={this.props.four} alt="imgFour"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.five, 4)} src={this.props.five} alt="imgFive"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.six, 5)} src={this.props.six} alt="imgSix"/>
             </div>
     
             <div class="photo-row">
              <img class="rowImg" onClick={()=>this.openSlide(this.props.seven, 6)} src={this.props.seven} alt="imgSeven"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.eight, 7)} src={this.props.eight} alt="imgEight"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.nine, 8)} src={this.props.nine} alt="imgNine"/>
             </div>
     
             <div class="photo-row">
              <img class="rowImg" onClick={()=>this.openSlide(this.props.ten, 9)} src={this.props.ten} alt="imgTen"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.eleven, 10)} src={this.props.eleven} alt="imgEleven"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.twelve, 11)} src={this.props.twelve} alt="imgTwelve"/>
             </div>
     
             <div class="photo-row">
              <img class="rowImg" onClick={()=>this.openSlide(this.props.thirteen, 12)} src={this.props.thirteen} alt="imgThirteen"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.fourteen, 13)} src={this.props.fourteen} alt="imgFourteen"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.fifteen, 14)} src={this.props.fifteen} alt="imgFifteen"/>
             </div>
     
             
             <div class="photo-row">
              <img class="rowImg" onClick={()=>this.openSlide(this.props.sixteen, 15)} src={this.props.sixteen} alt="imgSeventeen"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.seventeen, 16)} src={this.props.seventeen} alt="imgEighteen"/>
              <img class="rowImg" onClick={()=>this.openSlide(this.props.eighteen, 17)} src={this.props.eighteen} alt="imgTwenty"/>
             </div>
     
             </div>
             
     
         </div>
    
        } else {
            result=<Slideshow randomImg2={this.state.selectedPhoto} 
                              closeSlide={this.closeSlide}
                              plusSlide={this.plusSlide}
                              minusSlide={this.minusSlide}
                              />
        }

       
        return (
            <div>
                {result}
            </div>
        )
    }
}

export default Section
