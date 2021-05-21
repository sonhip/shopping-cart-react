import React from "react";
import { data } from "./dataImages";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./customize.scss";

const Carousel = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          zIndex: 10,
          right: "10%",
          fontSize: "40px",
        }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          zIndex: 10,
          left: "10%",
        }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <>
      <div className="w-full hidden md:block lg:block">
        <Slider {...settings}>
          {data.map((item, index) => {
            return (
              <div
                key={item.id}
                className="shadow-md w-full focus:outline-none"
              >
                <img
                  className="w-full h-full object-cover "
                  src={item.imgSrc}
                  alt="fakeImages"
                />
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default React.memo(Carousel);
