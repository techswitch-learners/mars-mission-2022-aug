import React from "react";

interface LargeImageProps{
  url: string;
  title: string;
}

export const LargeImage: React.FunctionComponent<LargeImageProps> = ({ url, title}) => {
  return (
    <div>
      <img className="large-picture" src={url} alt={title} width="90%" />
    </div>
  );
}
