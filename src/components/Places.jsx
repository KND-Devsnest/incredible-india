import React from "react";
import { useState } from "react";
import Slider from "react-slick";
import { PlacesData } from "./PlacesData";
import "../styles/Places.css";

const Places = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-right"
        >
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-chevron-left"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => {
      setImageIndex(next);
    },
  };

  return (
    <section id="placeSection" className="carousel">
      <div className="slider-heading">
        <h1 className="heading-title">Top Places</h1>
      </div>
      <div className="bg-image">
        <img
          className="bg-image-cover"
          src={PlacesData[imageIndex].image}
          alt="img"
        ></img>
      </div>
      <div className="exp-div" />
      <div className="exp-div2" />
      <div className="placescontainer">
        <Slider {...settings}>
          {PlacesData.map((img, idx) => (
            <div
              key={idx}
              className={idx === imageIndex ? "slide activeSlide" : "slide"}
            >
              <img src={img.image} alt={img.image} />
              <div className="bg-div">
                <h2 className="title">{img.title}</h2>
                <h4 className="info">{img.subtitle}</h4>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="write-up">
        <h1 className="main-title">{PlacesData[imageIndex].title}</h1>
        <h4 className="main-info">{PlacesData[imageIndex].info}</h4>
      </div>
    </section>
  );
};

export default Places;
