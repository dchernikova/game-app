import React from 'react';

import styled from 'styled-components';

import Skeleton from '../Skeleton';

import { getAspectRatio } from '../../helpers/_utils/getAspectRatio';

const StyledSkeleton = styled(Skeleton)`
  && {
    height: 0;

    padding-top: ${({ aspectRatio }) => `${getAspectRatio(aspectRatio)}%`};
  }
`;

const SkeletonImage = ({ aspectRatio, ...props }) => (
  <StyledSkeleton
    variant="rect"
    aspectRatio={aspectRatio}
    {...props}
  />
);

export default SkeletonImage
