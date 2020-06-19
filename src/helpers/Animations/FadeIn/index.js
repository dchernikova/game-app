import { css } from 'styled-components';

const FadeInAnimation = css`
  animation: FadeIn 0.4s ease;

  @keyframes FadeIn {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export default FadeInAnimation
