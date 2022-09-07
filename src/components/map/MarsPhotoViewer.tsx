import React, { useState, useEffect } from "react";

interface Props {
    day: string;
}

export const MarsPhotoViewer: React.FunctionComponent = ({day}: any) => {

    const [photo, setPhoto] = useState('');

    useEffect(() => {
        const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${day}&api_key=5j3Pvrt0HVQ1PXgmycftrPgdMFA9g0z4NxEBe3dd`;
    
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            setPhoto(data.photos[0].img_src);
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);

  return (
    <div>
      <img src= {photo}/>
    </div>
  );
};