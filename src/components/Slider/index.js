import React from 'react';

import Swiper from 'react-id-swiper';

const Slider = ({ children, ...props }) => (
  <Swiper {...props}>
    {children}
  </Swiper>
);

export default Slider
