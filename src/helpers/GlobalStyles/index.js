import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyles = createGlobalStyle`
  ${normalize()};

  body,
  [class^="Mui"] {
    && {
      font-family: 'Open Sans', sans-serif;
    }
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyles
