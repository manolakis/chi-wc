import { css } from '@lion/core';
import { tokenBaseUnit, tokenFontSizeBase } from '../foundations/tokens.js';

export const fontFamilyMixin = ({ fontFamily: _fontFamily = tokenFontSizeBase } = {}) => css`
  font-family: ${_fontFamily};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

export const fontMixin = ({ fontSize: _fontSize, lineHeight: _lineHeight } = {}) => css`
  font-size: ${_fontSize};
  line-height: ${_lineHeight};
`;

// language=CSS
export const textStyle = css`
  .-text--xl {
    ${fontMixin(css`1.125rem`, css`1.75rem`)};
  }
  .-text--lg {
    ${fontMixin(css`1rem`, css`1.5rem`)};
  }
  .-text--md {
    ${fontMixin(css`0.875rem`, css`1.5rem`)};
  }
  .-text--sm {
    ${fontMixin(css`0.8125rem`, css`1.25rem`)};
  }
  .-text--xs {
    ${fontMixin(css`0.75rem`, css`1rem`)};
  }

  .-text--h1 {
    ${fontMixin(css`3rem`, css`4rem`)};
  }
  .-text--h2 {
    ${fontMixin(css`2rem`, css`3rem`)};
  }
  .-text--h3 {
    ${fontMixin(css`1.5rem`, css`2rem`)};
  }
  .-text--h4 {
    ${fontMixin(css`1.125rem`, css`2rem`)};
  }
  .-text--h5 {
    ${fontMixin(css`1rem`, css`1.5rem`)};
  }
  .-text--h6 {
    ${fontMixin(css`0.875rem`, css`1.5rem`)};
  }

  .-lh--1 {
    line-height: ${tokenBaseUnit};
  }
  .-lh--2 {
    line-height: calc(${tokenBaseUnit} * 2);
  }
  .-lh--3 {
    line-height: calc(${tokenBaseUnit} * 3);
  }
  .-lh--4 {
    line-height: calc(${tokenBaseUnit} * 4);
  }
  .-lh--5 {
    line-height: calc(${tokenBaseUnit} * 5);
  }
  .-lh--6 {
    line-height: calc(${tokenBaseUnit} * 6);
  }
  .-lh--7 {
    line-height: calc(${tokenBaseUnit} * 7);
  }
  .-lh--8 {
    line-height: calc(${tokenBaseUnit} * 8);
  }
  .-lh--9 {
    line-height: calc(${tokenBaseUnit} * 9);
  }
`;
