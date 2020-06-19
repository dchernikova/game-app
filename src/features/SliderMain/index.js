import React from 'react';

import styled from 'styled-components';

import Slide from '../../components/Slide';
import Slider from '../../components/Slider';
import Wrapper from '../../components/Wrapper';

const StyledWrapper = styled(Wrapper)`
  .swiper-pagination {
    bottom: 16px;

    & > .swiper-pagination-bullet {
      position: relative;

      margin: 0 16px;
      opacity: 1;

      background: ${({ theme }) => theme.color.primary};

      &::after {
        content: '';
        display: block;

        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;

        width: 16px;
        height: 16px;

        border: 1px solid ${({ theme }) => theme.color.primary};
      }
    }

    & > .swiper-pagination-bullet-active {
      background: ${({ theme }) => theme.color.secondary};

      &::after {
        border-color: ${({ theme }) => theme.color.secondary};
      }
    }
  }
`;

const params = {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  }
};

const SliderMain = ({ slides = [] }) => (
  <StyledWrapper>
    <Slider rebuildOnUpdate {...params}>
      {slides.map((slide) => (
        <Slide
          key={slide.id}
          slide={slide}
        />
      ))}
    </Slider>
  </StyledWrapper>
);

export default SliderMain
