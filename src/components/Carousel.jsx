import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./carousel-style.css";
import DogBook from "../assets/portfolio/DogBook.JPG";
import AIscr from "../assets/portfolio/AIscreenshot.JPG";
import Theater from "../assets/portfolio/theaterapp.jpg";
import Html from "../assets/portfolio/html.png";

const Carousel = () => {
  const options = {
    rewind: true,
    gap: 20,
    perPage: 1,
    perMove: 1,
    type: "loop",
    pagination: false,
    mediaQuery: "min",
    breakpoints: {
      623: {
        perPage: 2,
      },
      1247: {
        perPage: 3,
      },
    },
  };
  return (
    <Splide options={options} aria-label="Portfolio">
      <SplideSlide>
        <div className="portfolio-slide">
          <div
            className="portfolio-img"
            style={{
              backgroundImage: `url(${DogBook})`,
            }}
          ></div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="portfolio-slide">
          <div
            className="portfolio-img"
            style={{
              backgroundImage: `url(${AIscr})`,
            }}
          ></div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="portfolio-slide">
          <img className="test" src={Html} alt="" />
          <div
            className="portfolio-img"
            style={{
              backgroundImage: `url(${Theater})`,
              backgroundPosition: "top",
            }}
          ></div>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;
