import { css, unsafeCSS } from '@lion/core';

export const boxSizingGenerator = (...selectors) => {
  const styles = selectors
    .map(
      selector =>
        `${unsafeCSS(selector)}, ${unsafeCSS(selector)}::before, ${unsafeCSS(
          selector,
        )}::after { box-sizing: border-box; }`,
    )
    .join('');

  return css([styles]);
};
