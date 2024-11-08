import React from "react";
import "./portfolio-style.css";
import PortfolioImage from "./PortfolioImage";
import DataHub from "../assets/portfolio/datahub.png";
import EBraun from "../assets/portfolio/eBraun.png";
import Veti from "../assets/portfolio/veti.png";
import MDR from "../assets/portfolio/MDR_portfolio.png";

const images = [
  { id: 1, src: DataHub, alt: "DataHub", url: "https://datahubmaastricht.nl/" },
  {
    id: 2,
    src: EBraun,
    alt: "EBraun",
    url: "https://kristinegusta.github.io/eBraun/",
  },
  {
    id: 4,
    src: MDR,
    alt: "MDR",
    url: "https://app.mdr.datahubmaastricht.nl",
  },
  {
    id: 3,
    src: Veti,
    alt: "VetiActive",
    url: "https://animated-torrone-0d0bb5.netlify.app/",
  },
];

const ImageGrid = () => {
  return (
    <div className="image-grid">
      {images.map((image) => (
        <a href={image.url}>
          <PortfolioImage key={image.id} src={image.src} alt={image.alt} />
        </a>
      ))}
    </div>
  );
};

export default ImageGrid;
