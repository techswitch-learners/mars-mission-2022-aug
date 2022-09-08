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

export const RouteMap: React.FunctionComponent<RouteMapProps> = ({
  roverName,
  mapImageUrl,
  pois,
}) => {
  const [sol, setSol] = useState<number>();
  const [photoUrls, setPhotosUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const url = `https://api.nasa.gov/mars-photos/api/v1/rovers/${roverName}/photos?sol=${sol}&camera=fhaz&api_key=5j3Pvrt0HVQ1PXgmycftrPgdMFA9g0z4NxEBe3dd`;

    const fetchData = async () => {
      try {
        setIsLoading(true)
        const response = await fetch(url);
        const json = await response.json();
        setPhotosUrls(json.photos);
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
    imageOrMap = <>
      <div className="map">
        <img src={mapImageUrl} alt={roverName} />;
        {pois.map((poi) => <RoutePoiButton x={poi.x} y={poi.y} sol={poi.sol} setSol={setSol} />)};
      </div>
    </>
  } else {
    imageOrMap = <>
      <div className="image-display">
        <button 
        className="route__poi-button"
        onClick={() => {
          setSol(undefined);
        }}>X</button>
        {photoUrls.slice(0,1).map(photo => <img
          src={photo.img_src}
          alt={`Sol ${sol}`}
        />)}
      </div>
    </>;
  }

  return (
    <main>
      {imageOrMap};
    </main>
  );
};
