import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./SliderHome.css";

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
      title: "Intuitive Workflow",
    },
    {
        image: sliderimg2,
        title: "Intuitive Workflow",
    },
    {
        image: sliderimg3,
        title: "Intuitive Workflow",
    },
    {
        image: sliderimg4,
        title: "Intuitive Workflow",
    },
    {
        image: sliderimg5,
        title: "Intuitive Workflow",
    },
    {
        image: sliderimg6,
        title: "Intuitive Workflow",
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
                <h2>{slide.title}</h2>
                <p>Read more</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
