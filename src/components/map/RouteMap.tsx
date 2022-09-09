import React, { useState, useEffect } from "react";
import { RoutePoiButton } from "./RoutePoiButton";
import "./RouteMap.scss";
import "./RoutePoiButton.scss";

interface PoiLocation {
  x: number;
  y: number;
  sol: number;
}

interface RouteMapProps {
  roverName: string;
  mapImageUrl: string;
  pois: PoiLocation[];
}

interface CameraResponse {
  id: number;
  name: string;
  rover_id: number;
  full_name: string;
}

interface PhotoResponse {
  id: number;
  sol: number;
  camera: CameraResponse
  img_src: string;
}

interface PhotoApiResponse {
  photos: PhotoResponse[];
}

export const RouteMap: React.FunctionComponent<RouteMapProps> = ({
  roverName,
  mapImageUrl,
  pois,
}) => {
  const [sol, setSol] = useState<number>();
  const [photoUrls, setPhotosUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const camera = roverName === "Curiosity" ? "MAST" : "PANCAM"
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&api_key=5j3Pvrt0HVQ1PXgmycftrPgdMFA9g0z4NxEBe3dd`

    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(url);
        const json: PhotoApiResponse = await response.json();
        const photos = json.photos;
        setPhotosUrls(photos.map(x => x.img_src));
        setIsLoading(false);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, [sol]);

  let imageOrMap = <></>;

  if(isLoading) return <p>Loading....</p>;

  if (sol === undefined) {
    imageOrMap = <div className="map-container">
      <div className="map">
        <img src={mapImageUrl} alt={roverName}/>
        {pois.map((poi) => <RoutePoiButton key={poi.sol} x={poi.x} y={poi.y} sol={poi.sol} setSol={setSol} />)}
      </div>
    </div>
  } else {
    imageOrMap = <>
      <div className="image-display">
        <button 
        className="route__poi-button"
        onClick={() => {
          setSol(undefined);
        }}>X</button>
        <div className="image-display">
          {photoUrls.slice(0, 30).map(photo => 
            <img 
              className="mars-image"
              src={photo}
              alt={`Sol ${sol}`}
            />)}
        </div>
      </div>
    </>
  }
  
  return (
    <main>
      {imageOrMap}
    </main>
  );
};
