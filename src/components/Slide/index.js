import React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@material-ui/core';

import styled from 'styled-components';

import { getAspectRatio } from '../../helpers/_utils/getAspectRatio';
import FadeInAnimation from '../../helpers/Animations/FadeIn';

const StyledBox = styled(
  ({ aspectRatio, ...rest }) => <Box {...rest} />,
)`
  ${FadeInAnimation};

  position: relative;
  overflow: hidden;

  display: flex;

  background: url(${({ image }) => image}) no-repeat center / cover;
  border-radius: 16px;

  &::before {
    content: '';

    display: block;

    width: 100%;
    padding-top: ${({ aspectRatio }) => `${getAspectRatio(aspectRatio)}%`};
  }
`;

const Slide = ({ slideComponent = Link, preview, aspectRatio, slide, children, ...props }) => {
  const { id, images } = slide;

  return (
    <StyledBox
      aspectRatio={aspectRatio}
      component={slideComponent}
      image={preview ? images.preview : images.main}
      to={`/product/${id}`}
      {...props}
    >
      {children}
    </StyledBox>
  )
};

export default Slide
