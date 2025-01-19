import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SliderHome.css";

// SwiperCore.use([Navigation, Pagination]);

//import images
import sliderimg1 from '../assets/slider1.jpg';
import sliderimg2 from '../assets/slider2.jpg';
import sliderimg3 from '../assets/slider3.jpg';
import sliderimg4 from '../assets/slider4.jpg';
import sliderimg5 from '../assets/slider5.jpg';
import sliderimg6 from '../assets/slider6.jpg';


const Slider = () => {
  const slides = [
    {
      image: sliderimg1,
      title: "Every day is a new beginning",
    },
    {
        image: sliderimg2,
        title: "Savor the little things",
    },
    {
        image: sliderimg3,
        title: "Today is a gift",
    },
    {
        image: sliderimg4,
        title: "Never give up on your dreams",
    },
    {
        image: sliderimg5,
        title: "In the midst of winter, I found there was, within me, an invincible summer",
    },
    {
        image: sliderimg6,
        title: "The best time for new beginnings is now",
    },
  ];

  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={50}
        slidesPerView={3}
        centeredSlides={true}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img src={slide.image} alt={slide.title} />
              <div className="slide-content">
                <h4>{slide.title}</h4>
                {/* <p>Read more</p> */}
              </div>
            </div>
          </SwiperSlide>
        ))}  

        {/* <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Slider;
