import React, { useState, useEffect } from "react";
import "./PhotoGallery.scss"
import { LargeImage } from "./LargeImage"

export const PhotoGallery: React.FunctionComponent = () => {

  const [imageUrls, setImageUrls] = useState<string[]>();
  const [largeImageUrl, setLargeImageUrl] = useState<string>("https://apod.nasa.gov/apod/image/0201/earthrise_apollo8.jpg");
  const [isLoading, setIsLoading] =useState<boolean>(false);

  const img_urls: string[] = [];

        useEffect(() => {
          const url = `https://api.nasa.gov/planetary/apod?count=50&api_key=DEMO_KEY`;
          
          const fetchData = async () => {
            
              setIsLoading(true);
              const response = await fetch(url);
              const json = await response.json();
              json.forEach((item: {url: string}) => img_urls.push(item.url));  
              setImageUrls(img_urls);
              setIsLoading(false);
          };
      
          fetchData();
      }, []);
  
      if(isLoading) { 
        return <p>Loading.....</p>
      }
  return (
      <div className="image-container">
        <LargeImage largeImageUrl={largeImageUrl} />
        <div className = "image-gallery">
          {imageUrls?.map(url => <img onClick={ () => {setLargeImageUrl(url);window.scrollTo(0,0)}} 
            className="space-image" src={url} alt = ""/>)}
        </div>
      </div>
  );
};
