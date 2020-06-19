import React from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  overflow: hidden;

  min-width: 320px;
  border-radius: 4px;
`;

const OptionsWrapper = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

export default OptionsWrapper
