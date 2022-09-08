import React from 'react';

interface Props {
    largeImageUrl: string
}

export const LargeImage: React.FunctionComponent<Props> = ({largeImageUrl}) => {

return (
    <div>
       <img className="main_picture" src={largeImageUrl} alt="lorem picsum" width="100%" />
    </div>
);
}