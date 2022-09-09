import React from "react";

interface LargeImageProps {
  largeImageUrl: string;
}

export const LargeImage: React.FunctionComponent<LargeImageProps> = ({ largeImageUrl }) => {
  return (
    <div>
      <img className="large-picture" src={largeImageUrl} alt="Large Picture" width="90%" />
    </div>
  );
}
