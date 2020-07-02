import React, { useState } from 'react';

import styled from 'styled-components';

import SkeletonImage from '../SkeletonImage';

import FadeInAnimation from '../../helpers/Animations/FadeIn';

const Img = styled.img`
  ${FadeInAnimation};

  display: ${({ isLoaded }) => isLoaded ? 'block' : 'none'};
  max-width: 100%;
`;

const Image = ({ src, alt, aspectRatio }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleOnLoad = () => {
    setIsLoaded(true)
  };

  return (
    <>
      {!isLoaded && (<SkeletonImage aspectRatio={aspectRatio} />)}

      <Img
        src={src}
        alt={alt}
        isLoaded={isLoaded}
        onLoad={handleOnLoad}
      />
    </>
  )
};

export default Image
