import { useState, useEffect } from "react";
import { HighlightSliderContainer } from "./HighlightSlider.styles";
import HighlightItem from "./components/highlight-item/HighlightItem";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { IHighlightSliderProps } from "./HighlightSlider.types";

const CHANGE_SLIDER_TIME = 4000;

const HighlightSlider = ({ highlightAnimes }: IHighlightSliderProps) => {
  let timeout: any;

  //     * STATES
  const [opacities, setOpacities]: any = useState([]);
  const [mouseOver, setMouseOver] = useState(false);
  const [triggerNewProgressBarAnimation, setTriggerNewProgressBarAnimation] =
    useState(true);

  //     * REFS

  //     * HOOKS
  const [sliderRef] = useKeenSlider(
    {
      slides: highlightAnimes.length,
      loop: true,
      detailsChanged(s) {
        const new_opacities = s.track.details.slides.map(
          (slide) => slide.portion
        );
        setOpacities(new_opacities);
      },
    },
    [
      (slider) => {
        setMouseOver(false);
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, CHANGE_SLIDER_TIME);
        }
        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            setMouseOver(true);
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            setMouseOver(false);
            nextTimeout();
          });
          nextTimeout();
        });
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationStarted", () => {
          setTriggerNewProgressBarAnimation(false);
        });
        slider.on("animationEnded", () => {
          nextTimeout();
          setTriggerNewProgressBarAnimation(true);
        });
        slider.on("updated", nextTimeout);
      },
    ]
  );

  useEffect(() => {
    return () => {
      clearTimeout(timeout);
    };
  }, [timeout]);

  //     * DATA-FETCHING

  //     * HANDLERS

  //     * EVENT-LISTENERS

  //! --- RENDER ---
  return (
    <HighlightSliderContainer
      mouseOver={mouseOver}
      time={CHANGE_SLIDER_TIME}
      triggerNewProgressBarAnimation={triggerNewProgressBarAnimation}
    >
      <div className="progress-bar-container"></div>
      <div ref={sliderRef} className="keen-slider">
        {highlightAnimes?.map((anime, index) => (
          <div
            key={index}
            style={{ opacity: opacities[index], zIndex: opacities[index] }}
          >
            <HighlightItem anime={anime} key={index} />
          </div>
        ))}
      </div>
    </HighlightSliderContainer>
  );
};

export default HighlightSlider;
