import React from "react";
import Slider from "react-slick";

const CenterSlider = ({ children }: { children: React.ReactNode }) => {
  const settings = {
    centerMode: true,
    speed: 500,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: "15px",
    arrows: false,
    className: "centerSlider"
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default CenterSlider;
