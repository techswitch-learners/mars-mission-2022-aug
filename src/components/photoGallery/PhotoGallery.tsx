import React, { useState, useEffect } from "react";
import "./PhotoGallery.scss";

interface Apod {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export const PhotoGallery: React.FunctionComponent = () => {
  const [imageUrls, setImageUrls] = useState<string[]>();

  useEffect(() => {
    const url = `https://api.nasa.gov/planetary/apod?count=50&api_key=DEMO_KEY`;

    const fetchData = async () => {
      const response = await fetch(url);
      const json: Apod[] = await response.json();
      setImageUrls(json.map((item) => item.url));
    };

    fetchData();
  }, []);

  return (
    <div className="image-gallery">
      {imageUrls === undefined ? (
        <p>Loading....</p>
      ) : (
        imageUrls.map((url) => <img className="space-image" src={url} alt="" />)
      )}
    </div>
  );
};