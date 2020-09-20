import { css } from '@lion/core';

export const tabletPortraitGenerator = content => css`
  @media only screen and (min-width: 576px) {
    ${content}
  }
`;

export const tabletLandscapeGenerator = content => css`
  @media only screen and (min-width: 768px) {
    ${content}
  }
`;

export const desktopSmallGenerator = content => css`
  @media only screen and (min-width: 992px) {
    ${content}
  }
`;

export const desktopGenerator = content => css`
  @media only screen and (min-width: 1200px) {
    ${content}
  }
`;
