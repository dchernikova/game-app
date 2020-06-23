import React from 'react';
import { Link } from 'react-router-dom';

import { Box } from '@material-ui/core';

import styled from 'styled-components';

import { getAspectRatio } from '../../helpers/_utils/getAspectRatio';
import FadeInAnimation from '../../helpers/Animations/FadeIn';

const StyledBox = styled(
  ({ aspectRatio, imageSrc, ...rest }) => <Box {...rest} />,
)`
  ${FadeInAnimation};

  position: relative;
  overflow: hidden;

  display: flex;

  width: 100%;

  background: url(${({ image }) => image}) no-repeat center / cover;
  border-radius: 16px;

  &::before {
    content: '';

    display: block;

    width: 100%;
    padding-top: ${({ aspectRatio }) => `${getAspectRatio(aspectRatio)}%`};
  }
`;

const Slide = ({
  slideComponent = Link,
  aspectRatio,
  imageSrc,
  children,
  ...props
}) => (
  <StyledBox
    aspectRatio={aspectRatio}
    component={slideComponent}
    image={imageSrc}
    {...props}
  >
    {children}
  </StyledBox>
);

export default Slide
