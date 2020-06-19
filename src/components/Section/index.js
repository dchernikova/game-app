import React from 'react';

import styled from 'styled-components';

import Wrapper from '../Wrapper';
import Typography from '../Typography';

const Content = styled.section`
  padding: 48px 0 24px;
`;

const TypographyWrapper = styled.div`
  position: relative;
  padding: 24px;

  &::after {
    content: '';

    position: absolute;
    top: 50%;
    left: 0;

    height: 1px;
    width: 100%;

    background-color: ${({ theme }) => theme.color.primary};
    transform: translateY(-50%);
  }
`;

const StyledTypography = styled(Typography)`
  && {
    margin: 0 24px;
    padding: 0 16px;
  }

  position: relative;
  z-index: 1;

  display: inline-block;

  background-color: ${({ theme }) => theme.color.blue};
`;

const Section = ({ title, children }) => (
  <Content>
    <Wrapper>
      {title && (
        <TypographyWrapper>
          <StyledTypography
            variant="h5"
            component="h2"
            uppercase
          >
            {title}
          </StyledTypography>
        </TypographyWrapper>
      )}
    </Wrapper>

    {children}
  </Content>
);

export default Section
