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
    // initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div style={{ width: "100%" }}>
      {/* <Slider {...settings}>
        {data.map((game, i) => {
          if (i < 7) {
            return (
              <div className={cn(styles["slide-container"])} key={game.id}>
                <img className={cn(styles["centered-image"])} src={game.thumbnail} alt={`Slide ${i + 1}`} />
              </div>
            );
          }
        })}
      </Slider> */}
    </div>
  );
}

// customPaging: function (i) {
//   return (
//     <a className={cn(styles["slide-container"])}>
//       <img className={cn(styles["centered-image"])} src={"https://www.freetogame.com/g/6/thumbnail.jpg"} />
//     </a>
//   );
// },
