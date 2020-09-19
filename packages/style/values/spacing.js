import { css } from '@lion/core';

export const rem = Array.from(Array(64).keys()).map(
  index =>
    css`
      ${index / 16}rem
    `,
);
