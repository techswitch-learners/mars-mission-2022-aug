import React, { useState, useEffect } from "react";
import "./PhotoGallery.scss"

export const PhotoGallery: React.FunctionComponent = () => {

  const [imageUrls, setImageUrls] = useState<string[]>();
  const img_urls: string[] = [];

        useEffect(() => {
          const url = `https://api.nasa.gov/planetary/apod?count=50&api_key=DEMO_KEY`;
          
          const fetchData = async () => {
            
              const response = await fetch(url);
              const json = await response.json();
              //json.forEach((item: {url: string}) => img_urls.push(item.url));  
              setImageUrls(json.map(item => item.url));
          };
      
          fetchData();
      }, []);

  return (
      <div className = "image-gallery">
        {
          imageUrls === undefined
          ? <p>Loading....</p>
          : imageUrls.map(url => <img 
        className="space-image" src={url} alt = ""/>)}
      </div>
  );
};
