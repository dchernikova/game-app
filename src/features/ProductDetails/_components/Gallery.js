import React, { useEffect, useState } from 'react';

import { ButtonBase } from '@material-ui/core';

import styled from 'styled-components';

import Image from '../../../components/Image';
import Slider from '../../../components/Slider';

const Slide = styled(
  ({ active, ...rest }) => <ButtonBase {...rest} />,
)`
  && {
    position: relative;

    margin-top: 32px;
    margin-bottom: 32px;

    border: 1px solid ${({ active, theme }) => (active ? theme.color.secondary : 'transparent')};

    transition: border-color 0.2s;

    &::after {
      content: '';
      opacity: ${({ active }) => (active ? 1 : 0)};

      position: absolute;
      top: -16px;
      right: 0;
      left: 0;
      margin: auto;

      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 16px 16px 16px;
      border-color: transparent transparent ${({ theme }) => theme.color.secondary} transparent;

      transition: opacity 0.2s;
    }
  }
`;

const params = {
  spaceBetween: 32,
  slidesPerView: 3,
};

const Gallery = ({ images, productName }) => {
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  const handleSlideClick = (image) => setActiveImage(image);

  return (
    <>
      {activeImage && (
        <Image
          src={activeImage}
          alt={productName}
        />
      )}

      <Slider {...params}>
        {images.map((image, i) => (
          <Slide
            key={i}
            active={activeImage === image}
            onClick={() => handleSlideClick(image)}
          >
            <Image
              src={image}
              alt={productName + i}
            />
          </Slide>
        ))}
      </Slider>
    </>
  )
};

export default Gallery
