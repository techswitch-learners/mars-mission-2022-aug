import React from "react";
import "./RoutePoiButton.scss";

interface RoutePoiButtonProps {
  x: number; // number from 0 to 1 representing proportion across the image from left to right
  y: number; // number from 0 to 1 representing proportion across the image from top to bottom
  sol: number;
  setSol: (sol: number) => void;
}

export const RoutePoiButton: React.FunctionComponent<RoutePoiButtonProps> = ({
  x,
  y,
  sol,
  setSol,
}) => {
  return <button
      className="route__poi-button"
      onClick={() => setSol(sol)}
      style={{
        left: `${x * 100}%`,
        top: `${y * 100}%`,
      }}
    >
    Day {sol}
  </button>
}
