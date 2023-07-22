
import Slider from "react-slick";
import React from 'react'
import './carousel.css'


const testData = [
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
  {
    id: 1,
  },
]
var numero = 0

function CarouselPokemon() {
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
        {
          testData.map(data => {
            numero += 1
            return (
              <div>
                <h3>{data.id + numero}</h3>
              </div>
            )
          })
        }

      </Slider>
    </aside>
  );
}

export default CarouselPokemon