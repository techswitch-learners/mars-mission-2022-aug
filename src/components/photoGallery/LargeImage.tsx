import React from 'react';

interface Props {
    largeImageUrl: string
}

export const LargeImage: React.FunctionComponent<Props> = ({largeImageUrl}) => {

    return (
    <div>
       <img className="large-picture" src={largeImageUrl} alt="lorem picsum" width="90%" />
    </div>
);
}
