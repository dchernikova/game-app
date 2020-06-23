import React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@material-ui/core';

import styled from 'styled-components';

import Slide from '../../components/Slide';
import Slider from '../../components/Slider';
import Typography from '../../components/Typography';

const StyledTypography = styled(Typography)`
  && {
    color: inherit;
  }
`;

const StyledBox = styled(Box)`
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;

  padding: 8px 16px;

  background-color: rgba(0, 0, 40, 0.4);
  color: ${({ theme }) => theme.color.primary};

  transition: background-color 0.2s;
`;

const StyledLink = styled(Link)`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3)), url(${({ image }) => image}) no-repeat center / cover;

  &:hover {
    ${StyledBox} {
      background-color: rgba(0, 0, 40, 0.6);
      color: ${({ theme }) => theme.color.secondary};
    }
  }
`;

const params = {
  loop: true,
  slidesPerView: 2.5,
  centeredSlides: true,
  spaceBetween: 32,

  breakpoints: {
    640: {
      slidesPerView: 4.5,
    },
    1024: {
      slidesPerView: 5.5,
    },
    1200: {
      slidesPerView: 7.5,
    },
  },
};

const SliderProducts = ({ slides = [] }) => (
  <Slider rebuildOnUpdate {...params}>
    {slides.map((slide) => (
      <Slide
        key={slide.id}
        aspectRatio={[3, 4]}
        slideComponent={StyledLink}
        to={`/product/${slide.id}`}
        imageSrc={slide.images.preview}
      >
        <StyledBox>
          <StyledTypography
            variant="body1"
            center
            bold
          >
            {slide.name}
          </StyledTypography>

          <StyledTypography
            variant="body2"
            center
          >
            {slide.price}
          </StyledTypography>
        </StyledBox>
      </Slide>
    ))}
  </Slider>
);

export default SliderProducts
