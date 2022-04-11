import { IGroupSlider } from "./GroupSlider.types";
import { GroupSliderContainer } from "./GroupSlider.styles";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React from "react";
import SliderItem from "./components/slider-item/SliderItem";

const GroupSlider = ({ title, animes }: IGroupSlider) => {
  console.log(animes);
  const [sliderRef] = useKeenSlider({
    loop: true,
    breakpoints: {
      "(min-width: 190px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 400px)": {
        slides: { perView: 2, spacing: 10 },
      },
      "(min-width: 610px)": {
        slides: { perView: 3, spacing: 10 },
      },
      "(min-width: 820px)": {
        slides: { perView: 4, spacing: 10 },
      },
      "(min-width: 1030px)": {
        slides: { perView: 5, spacing: 10 },
      },
      "(min-width: 1240px)": {
        slides: { perView: 6, spacing: 10 },
      },
      "(min-width: 1450px)": {
        slides: { perView: 7, spacing: 10 },
      },
      "(min-width: 1660px)": {
        slides: { perView: 8, spacing: 10 },
      },
      "(min-width: 1870px)": {
        slides: { perView: 9, spacing: 10 },
      },
      "(min-width: 2080px)": {
        slides: { perView: 10, spacing: 10 },
      },
      "(min-width: 2290px)": {
        slides: { perView: 11, spacing: 10 },
      },
    },
  });

  return (
    <GroupSliderContainer>
      <h2 className="header">{title}</h2>
      <div className="line"></div>
      <div className="keen-slider" ref={sliderRef}>
        {animes.map((anime) => (
          <SliderItem key={anime._id} anime={anime} />
        ))}
      </div>
    </GroupSliderContainer>
  );
};

export default GroupSlider;
