import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./carousel-style.css";
import DogBook from "../assets/portfolio/DogBook.JPG";
import AIscr from "../assets/portfolio/AIscreenshot.JPG";
import Theater from "../assets/portfolio/theaterapp.jpg";
import Portfolio from "../assets/portfolio/port-screenshot.JPG";
import Mockup from "../assets/portfolio/mockup.JPG";

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
      500: {
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
        <a href="https://github.com/kristinegusta/DogBook">
          <div className="portfolio-slide">
            <div
              className="portfolio-img"
              style={{
                backgroundImage: `url(${DogBook})`,
              }}
            ></div>
          </div>
        </a>
      </SplideSlide>
      <SplideSlide>
        <a href="https://github.com/Tim-Poels/ai-server-web-ui">
          <div className="portfolio-slide">
            <div
              className="portfolio-img"
              style={{
                backgroundImage: `url(${AIscr})`,
              }}
            ></div>
          </div>
        </a>
      </SplideSlide>
      <SplideSlide>
        <a href="https://github.com/charlottelotte2021/OneTheater_app">
          <div className="portfolio-slide">
            <div
              className="portfolio-img"
              style={{
                backgroundImage: `url(${Theater})`,
                backgroundPosition: "top",
              }}
            ></div>
          </div>
        </a>
      </SplideSlide>
      <SplideSlide>
        <a href="https://github.com/kristinegusta/kg-portfolio">
          <div className="portfolio-slide">
            <div
              className="portfolio-img"
              style={{
                backgroundImage: `url(${Portfolio})`,
              }}
            ></div>
          </div>
        </a>
      </SplideSlide>
      <SplideSlide>
        <a href="https://github.com/kristinegusta/crafted-business">
          <div className="portfolio-slide">
            <div
              className="portfolio-img"
              style={{
                backgroundImage: `url(${Mockup})`,
                backgroundPosition: "inherit",
              }}
            ></div>
          </div>
        </a>
      </SplideSlide>
    </Splide>
  );
};

export default Carousel;
