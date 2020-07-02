import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Lightbox from 'react-image-lightbox';

import 'react-image-lightbox/style.css';

import { ButtonBase } from '@material-ui/core';

import styled from 'styled-components';

import Slide from '../../../components/Slide';
import Slider from '../../../components/Slider';

import SkeletonGallery from './SkeletonGallery';

const StyledButton = styled(
  ({ active, ...rest }) => <ButtonBase {...rest} />,
)`
  && {
    overflow: visible;

    margin-top: 32px;
    margin-bottom: 32px;

    &::before {
      border: 1px solid ${({ active, theme }) => (active ? theme.color.secondary : 'transparent')};

      transition: border-color 0.2s;
    }

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

const Gallery = ({ id }) => {
  const [images, setImages] = useState([]);
  const [activeImage, setActiveImage] = useState(null);
  const [imageIndex, setImageIndex] = useState(0);
  const [imageIsOpen, setImageIsOpen] = useState(false);

  const openImage = () => setImageIsOpen(true);
  const closeImage = () => {
    setImageIsOpen(false);
    setImageIndex(images.indexOf(activeImage));
  };
  const moveToNextImage = () => setImageIndex((imageIndex + 1) % images.length);
  const moveToPrevImage = () => setImageIndex((imageIndex + images.length - 1) % images.length);

  useEffect(() => {
    axios.get(`https://api.rawg.io/api/games/${id}/screenshots`)
      .then((response) => {
        const images = response.data.results.map((item) => item.image);
        setImages(images)
      });
  }, [id]);

  useEffect(() => {
    setActiveImage(images[0]);
  }, [images]);

  const handleSlideClick = (image, i) => {
    setActiveImage(image);
    setImageIndex(i);
  };

  return (
    <>
      {images.length !== 0 ? (
        <>
          <Slide
            onClick={openImage}
            imageSrc={activeImage}
            slideComponent={ButtonBase}
          />

          {imageIsOpen && (
            <Lightbox
              mainSrc={images[imageIndex]}
              nextSrc={images[(imageIndex + 1) % images.length]}
              prevSrc={images[(imageIndex + images.length - 1) % images.length]}
              onCloseRequest={closeImage}
              onMovePrevRequest={moveToPrevImage}
              onMoveNextRequest={moveToNextImage}
            />
          )}

          <Slider shouldSwiperUpdate {...params}>
            {images.map((image, i) => (
              <Slide
                key={image}
                imageSrc={image}
                active={activeImage === image}
                onClick={() => handleSlideClick(image, i)}
                slideComponent={StyledButton}
              />
            ))}
          </Slider>
        </>
      ) : (
        <SkeletonGallery />
      )}
    </>
  )
};

export default Gallery
