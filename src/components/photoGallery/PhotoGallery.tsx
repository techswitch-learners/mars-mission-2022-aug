import React, { useState, useEffect } from "react";
import "./PhotoGallery.scss"

export const PhotoGallery: React.FunctionComponent = () => {

  const [imageUrls, setImageUrls] = useState<string[]>();
  const img_urls: string[] = [];

        useEffect(() => {
          const url = `https://api.nasa.gov/planetary/apod?count=50&api_key=DEMO_KEY`;
          
          const fetchData = async () => {
            try {
              const response = await fetch(url);
              const json = await response.json();
              json.forEach((item: {url: string}) => img_urls.push(item.url));  
              setImageUrls(img_urls);
            } catch (error) {
              console.log("error", error);
            }
          };
      
          fetchData();
      }, []);

  return (
      <div className = "imageGallery">
      {imageUrls?.map(url => <img className="spaceImage" src={url} alt = ""/>)}
          </div>
  );
};
