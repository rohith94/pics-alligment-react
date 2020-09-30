import React from "react";
import ImageCard from "../ImageCard/ImageCard";
import "./ImageList.css";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return (
      //   <img key={image.id} src={image.urls.regular} alt={image.description} />
      <ImageCard key={image.id} image={image} />
    );
  });

  return (
    <div>
      <div className="image-list">{images}</div>
    </div>
  );
};

export default ImageList;
