import React, { useState } from 'react';
import './Carousel.css'; // Assuming you have your CSS styles in App.css

import image1 from '../../assets/Frame0.jpg';
import image2 from '../../assets/Frame1.jpg';
import image3 from '../../assets/Frame2.jpg';
import image4 from '../../assets/Frame3.jpg';
import image5 from '../../assets/Frame4.png';


const images = [image1 , image2 , image3 , image4 , image5 ];

function Carousel() {

  const [currentIndex , setCurrentIndex] = useState(2); 

  function handleLeft() {
    console.log('left')
    setCurrentIndex((previndex) => {
      if(previndex ===0){
        return images.length -1;
      }
      return previndex-1;
    })
  }

  function handleRight() {
    console.log('right')
    setCurrentIndex((previndex) => {
      if(previndex === images.length-1){
        return 0;
      }
      return previndex+1;
    })
  }

  return (
    <>
      <div className="container">
        <div className="image-container">
          <img className="image3" src = {images[((currentIndex-2)+images.length) % images.length]} alt =""/>
          <img className="image2" src = {images[((currentIndex-1)+images.length) % images.length]} alt =""/>
          <img className="image1" src = {images[currentIndex]} alt =""/>
          <img className="image4" src = {images[(currentIndex+1)%images.length]} alt =""/>
          <img className="image5" src = {images[(currentIndex+2)%images.length]} alt =""/>
        </div>

        
      </div>
      <div className='buttons'>
        <button onClick={handleLeft}> left</button>
        <button onClick={handleRight}> right</button>
      </div>
    </>
  );
}

export default Carousel;