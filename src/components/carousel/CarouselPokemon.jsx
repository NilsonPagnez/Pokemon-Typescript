
import Slider from "react-slick";
import React from 'react'
import './carousel.css'
import ApiCallTest from "../../custom/queryFunctions/ApiCallTest";

function CarouselPokemon(props) {
  
  var settings = {
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    adaptiveHeight: true,
    focusOnSelect: true,
    swipeToSlide:true,
    verticalSwiping: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    }
  };
  return (
    <aside className="carouselAside">
      <Slider {...settings}>
        {props.children}
      </Slider>
    </aside>
  );
}

export default CarouselPokemon