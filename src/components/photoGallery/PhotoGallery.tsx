import React, { useState, useEffect } from "react";
import "./PhotoGallery.scss";
import { LargeImage } from "./LargeImage";

export interface Apod {
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

const firstLargeImage: Apod = {date:"2013-07-13",
                        explanation:"Reddened rays of the setting Sun flooded the skies over Cedar Creek Lake",
                        hdurl:"https://apod.nasa.gov/apod/image/1307/Sunspot-06July2013-johunter.jpg",
                        media_type:"image",
                        service_version:"v1",
                        title:"Sunspot at Sunset",
                        url:"https://apod.nasa.gov/apod/image/1307/Sunspot-06July2013-johunter950.jpg"}

export const PhotoGallery: React.FunctionComponent = () => {
  const [imageData, setImageData] = useState<Apod[]>();
  const [largeImage, setLargeImage] = useState<Apod>(firstLargeImage);

  useEffect(() => {
    const url = `https://api.nasa.gov/planetary/apod?count=50&api_key=DEMO_KEY`;
    const fetchData = async () => {
    const response = await fetch(url);
    const json: Apod[] = await response.json();
    setImageData(json)
    };

    fetchData();
  }, []);

  return (
    <div className="image-container">
      <LargeImage url={largeImage.url} title={largeImage.title} />
      <div className="image-gallery">
        {
          imageData === undefined
            ? <p>Loading....</p>
            : imageData.map(image => <img
              onClick={() => { setLargeImage(image); window.scrollTo(0, 0) }}
              className="space-image" src={image.url} alt={image.title} />)}
      </div>
    </div>
  );
};
