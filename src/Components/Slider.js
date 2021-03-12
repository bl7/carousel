import React from 'react';
import { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialData from './TestimonalData';
import { RightOutlined, LeftOutlined } from '@ant-design/icons';

function ImageSlider() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <RightOutlined />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <LeftOutlined />
      </div>
    );
  };
  const [divIndex, setDivIndex] = useState(0);

  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    // cssEase: 'linear',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setDivIndex(next),
  };
  return (
    <Slider {...settings}>
      {TestimonialData.map((testimonials, idx) => (
        <div
          className={
            idx === divIndex ? 'card-wrapper activeCardWrapper' : 'card-wrapper'
          }
        >
          <div className="card">
            <div
              className="testimonial"
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
              }}
            >
              <img
                src={testimonials.image.imageTutor}
                style={{
                  width: '65px',
                  height: 'auto',
                }}
              />
              {testimonials.rating}
              {testimonials.blockquote}
              {testimonials.name}
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
}

export default ImageSlider;
