import React from "react";

const Image = ({ src, alt }) => {
  return (
    <div className="image-container">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Image;
