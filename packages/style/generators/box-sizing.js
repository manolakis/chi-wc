import { unsafeCSS } from '@lion/core';

export const boxSizingGenerator = selector => unsafeCSS`
  ${selector},
  ${selector}::before,
  ${selector}::after {
    box-sizing: border-box;
  }
`;
