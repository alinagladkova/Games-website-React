import Slider from "react-slick";
import cn from "classnames";
import styles from "./carousel.module.scss";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";
import { NextArrow, PrevArrow } from "../sliderComponents/SliderComponents.jsx";

export default function Carousel({ data }) {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    waitForAnimate: false,
    centerMode: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div>
      <Slider {...settings}>
        {data.screenshots.map((screenshot) => {
          return (
            <div className={cn(styles["slide-container"])} key={screenshot.id}>
              <img className={cn(styles["centered-image"])} src={screenshot.image} alt="img" />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
