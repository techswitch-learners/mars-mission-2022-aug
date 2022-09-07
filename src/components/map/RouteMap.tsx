import React, { useState } from "react";
import { RoutePoiButton } from "./RoutePoiButton";
import "./RouteMap.scss";

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

  let imageOrMap = <></>;

  if (sol === undefined) {
    imageOrMap = <>
      <div className="map">
        <img src={mapImageUrl} alt={roverName} />
        {pois.map((poi) => <RoutePoiButton x={poi.x} y={poi.y} sol={poi.sol} setSol={setSol} />)}
      </div>
    </>
  } else {
    imageOrMap = <>
      <button onClick={() => {
        setSol(undefined);
      }}>X</button>
      <img
        src={`url for image for sol ${sol}`}
        alt={`Sol ${sol}`}
      />
      Image for sol {sol}
    </>;
  }

  return (
    <main>
      {imageOrMap}
    </main>
  );
};
