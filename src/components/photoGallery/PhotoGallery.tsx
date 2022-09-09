import React, { useState, useEffect } from "react";
import "./PhotoGallery.scss";
import { LargeImage } from "./LargeImage";

export const PhotoGallery: React.FunctionComponent = () => {
  const [imageUrls, setImageUrls] = useState<string[]>();
  const [largeImageUrl, setLargeImageUrl] = useState("https://apod.nasa.gov/apod/image/0201/earthrise_apollo8.jpg");

  useEffect(() => {
    const url = `https://api.nasa.gov/planetary/apod?count=50&api_key=DEMO_KEY`;

    const fetchData = async () => {
      const response = await fetch(url);
      const json = await response.json();
      setImageUrls(json.map((item) => item.url));
    };

    fetchData();
  }, []);

  return (
    <div className="image-container">
      <LargeImage largeImageUrl={largeImageUrl} />
      <div className="image-gallery">
        {imageUrls === undefined ? (
          <p>Loading....</p>
        ) : (
          imageUrls.map((url) => <img className="space-image" src={url} alt="" />)
        )}
      </div>
    </div>
  );
};
